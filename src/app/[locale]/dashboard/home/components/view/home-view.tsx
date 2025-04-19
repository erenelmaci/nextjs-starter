'use client';

import { ChartAreaInteractive } from '@/app/[locale]/dashboard/home/components/chart-area-interactive';
import { DataTable } from '@/layout/dashboard/components/data-table';
import { SectionCards } from '@/app/[locale]/dashboard/home/components/section-cards';

export function HomeView() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
          <DataTable data={[]} /> {/* data prop'unu kendi view'ınızda yönetin */}
        </div>
      </div>
    </div>
  );
}
