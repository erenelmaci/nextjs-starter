import { RegisterForm } from '../register-form';
import Image from 'next/image';
import Dashboard from '@/../public/assets/illustrations/illustration-dashboard.webp';
import { useTranslations } from 'next-intl';
import Logo from '@/components/logo/logo';

export default function RegisterView() {
  const t = useTranslations('auth.register');
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <div className="flex flex-col justify-between items-center min-h-screen py-10 px-4">
          <div className="w-full flex items-center justify-center">
            <Logo isSingle={false} />
            {/* <Image
              src={Logo}
              alt="kursmax-logo-svg"
              width={250}
              height={50}
              className="object-contain"
              priority
            /> */}
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-black">{t('welcomeKursmax')}</h1>
            <p className="text-muted-foreground text-m">{t('followWithKursmax')}</p>
          </div>

          <div className="w-full mb-30 flex items-center justify-center">
            <Image
              src={Dashboard}
              alt="dashboard-illustration"
              width={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
