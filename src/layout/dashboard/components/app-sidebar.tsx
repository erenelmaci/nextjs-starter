'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { useNavData } from '@/layout/dashboard/config-navigation';
import { NavSection } from './nav-section';
import { NavUser } from './nav-user';
import Logo from '../../../../public/logo/logo-full.svg';
import Image from 'next/image';
// import { useTranslations } from 'next-intl';

const defaultUser = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/placeholder.svg',
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navData = useNavData();
  // const t = useTranslations('dashboard');

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="w-full px-4">
            <SidebarMenuButton asChild className="w-full data-[slot=sidebar-menu-button]:!p-4">
              {/* <a href="#">
                <span className="text-base font-semibold">{t('companyName')}</span>
              </a> */}
              <div className="w-full h-12 relative flex items-center justify-center">
                <Image
                  src={Logo}
                  alt="Kursmax Logo"
                  width={300}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navData.map(section => (
          <NavSection key={section.subheader} subheader={section.subheader} items={section.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={defaultUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
