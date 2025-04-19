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
import { useTranslations } from 'next-intl';

const defaultUser = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/placeholder.svg',
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navData = useNavData();
  const t = useTranslations('dashboard');

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="#">
                <span className="text-base font-semibold">{t('companyName')}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navData.map(section => (
          <NavSection
            key={section.subheader}
            subheader={t(section.subheader)}
            items={section.items}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={defaultUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
