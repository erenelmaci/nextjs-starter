import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslations } from 'next-intl';
import { Iconify } from '@/components/iconify/iconify';
import { paths } from '@/routes/paths';

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<'form'>) {
  const t = useTranslations('auth.login');
  return (
    <form className={cn('flex flex-col gap-6', className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t('loginAccount')}</h1>
        <p className="text-balance text-sm text-muted-foreground">{t('inputEmail')}</p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input id="email" type="email" placeholder="ornek@email.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">{t('password')}</Label>
            <a
              href={paths.auth.passwordRecovery}
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              {t('forgotPassword')}
            </a>
          </div>
          <Input id="password" type="password" required />
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
        <a href={paths.auth.signUp} className="underline underline-offset-4">
          {t('register')}
        </a>
      </div>
    </form>
  );
}
