import { Iconify } from '@/components/iconify/iconify';
import { paths } from '@/routes/paths';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

const ICONS = {
  home: <Iconify icon="solar:home-2-broken" />,
  settings: <Iconify icon="solar:settings-broken" />,
};

export function useNavData() {
  const t = useTranslations('dashboard');

  return useMemo(() => {
    const navData = [
      {
        subheader: t('Overview'),
        items: [
          {
            title: t('Home'),
            path: paths.dashboard.root,
            icon: ICONS.home,
          },
        ],
      },
    ];

    return navData.map(section => ({
      ...section,
    }));
  }, [t]);
}
