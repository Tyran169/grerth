import SiteTitle from '@/components/main-layout/site-title';
import { ChartAreaInteractive } from './component/chart-area-interactive';
import { DataTable } from './component/data-table';
import { SectionCards } from './component/section-cards';

import data from './data.json';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <SiteTitle title="Dashboard">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <Suspense>
              <DataTable data={data} />
            </Suspense>
          </div>
        </div>
      </div>
    </SiteTitle>
  );
}
