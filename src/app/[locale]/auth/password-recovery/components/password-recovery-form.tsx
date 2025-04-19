'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import kursmaxLogo from '@/../public/logo/logo-full.svg';
import { useTranslations } from 'next-intl';
import { paths } from '@/routes/paths';

export function PasswordRecoveryForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const t = useTranslations('auth.passwordRecovery');

  return (
    <div className={cn('flex justify-center items-center', className)} {...props}>
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex flex-col items-center gap-4">
          <a href={paths.auth.signIn} className="flex flex-col items-center gap-2 font-medium">
            <Image
              src={kursmaxLogo}
              alt="kursmax-logo-svg"
              width={200}
              height={48}
              className="object-contain"
              priority
            />
            <span className="sr-only">{t('companyName')}</span>
          </a>
          <CardTitle className="text-xl text-center">{t('title')}</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            {t('description')}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          <form className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailPlaceholder')}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              {t('submit')}
            </Button>
          </form>

          <div className="text-center text-sm">
            {t('rememberPassword')}{' '}
            <a href={paths.auth.signIn} className="underline underline-offset-4">
              {t('signIn')}
            </a>
          </div>

          <div className="text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
            <a href="/terms">{t('termsText')}</a> {t('and')}{' '}
            <a href="/privacy">{t('privacyLink')}</a>.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
