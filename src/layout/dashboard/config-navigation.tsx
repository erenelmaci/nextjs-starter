import { Iconify } from '@/components/iconify/iconify';
import { paths } from '@/routes/paths';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

const ICONS = {
  home: <Iconify icon="solar:home-2-broken" />,
};

export function useNavData() {
  const t = useTranslations('dashboard');

  return useMemo(() => {
    const navData = [
      {
        subheader: 'Overview',
        items: [
          {
            title: t('home'),
            path: paths.dashboard.root,
            // roles: [""],
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
