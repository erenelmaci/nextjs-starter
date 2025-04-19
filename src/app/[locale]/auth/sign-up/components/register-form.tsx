'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { Iconify } from '@/components/iconify/iconify';
import { paths } from '@/routes/paths';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { countries } from '@/assets/data/countries';
import { useMemo, useState } from 'react';

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const t = useTranslations('auth.register');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('TR');
  const [isOpen, setIsOpen] = useState(false);

  // Filtreleme fonksiyonu
  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countries.filter(country => country.code !== '');

    return countries
      .filter(country => country.code !== '')
      .filter(
        country =>
          country.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          country.phone.includes(searchQuery)
      );
  }, [searchQuery]);

  // SelectValue render fonksiyonu
  const renderValue = () => {
    const country = countries.find(c => c.code === selectedCountry);
    return (
      <span className="flex items-center gap-2">
        <Iconify icon={`circle-flags:${selectedCountry.toLowerCase()}`} />
        <span>+{country?.phone}</span>
      </span>
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchQuery(e.target.value);
  };

  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t('registerKursmax')}</h1>
        <p className="text-balance text-sm text-muted-foreground">{t('enterYourDetails')}</p>
      </div>
      <div className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="firstName">{t('firstName')}</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={t('enterYourFirstName')}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastName">{t('lastName')}</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder={t('enterYourLastName')}
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" type="email" placeholder="ornek@email.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">{t('phone')}</Label>
          <div className="flex gap-2">
            <Select
              defaultValue="TR"
              onValueChange={setSelectedCountry}
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue>{renderValue()}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" className="max-h-[300px] w-[300px]">
                <div
                  className="sticky top-0 z-50 bg-background p-2 border-b"
                  onKeyDown={e => e.stopPropagation()}
                >
                  <Input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder={t('searchCountry')}
                    className="h-8"
                    onKeyDown={e => {
                      e.stopPropagation();
                    }}
                    onClick={e => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  />
                </div>
                <div className="pt-2">
                  {filteredCountries.map(country => (
                    <SelectItem
                      key={country.code}
                      value={country.code}
                      onSelect={e => {
                        e.preventDefault();
                        setSelectedCountry(country.code);
                        setIsOpen(false);
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span>
                          <Iconify icon={`circle-flags:${country.code.toLowerCase()}`} />
                        </span>
                        <span className="flex-1 truncate">{country.label}</span>
                        <span className="text-muted-foreground whitespace-nowrap">
                          {country.code} (+{country.phone})
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </div>
              </SelectContent>
            </Select>
            <Input
              id="phone"
              type="tel"
              placeholder={t('enterYourPhone')}
              className="flex-1"
              required
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">{t('password')}</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">{t('passwordAgain')}</Label>
          </div>
          <Input id="passwordRecovery" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          {t('login')}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">{t('or')}</span>
        </div>
        <Button variant="outline" className="w-full justify-center ">
          <Iconify icon="flat-color-icons:google" width={20} />
          {t('providerGoogleLogin')}
        </Button>
      </div>
      <div className="text-center text-sm">
        {t('dontHaveAccount')}{' '}
        <a href={paths.auth.signIn} className="underline underline-offset-4">
          {t('register')}
        </a>
      </div>
    </form>
  );
}
