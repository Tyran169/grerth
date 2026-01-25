import SiteTitle from '@/components/main-layout/site-title';
import {
  ChartAreaInteractive,
  type ChartDataPoint
} from './component/chart-area-interactive';
import { DataTable, type DataTableItem } from './component/data-table';
import { SectionCards } from './component/section-cards';
import { Suspense } from 'react';

export default async function Page() {
  const tbData = fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/data-table`
  ).then((res) => res.json() as Promise<DataTableItem[]>);

  const chartData = fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/data-chart`
  ).then((res) => res.json() as Promise<ChartDataPoint[]>);

  return (
    <SiteTitle title="Dashboard">
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <Suspense>
                <ChartAreaInteractive data={chartData} />
              </Suspense>
            </div>
            <Suspense>
              <DataTable data={tbData} />
            </Suspense>
          </div>
        </div>
      </div>
    </SiteTitle>
  );
}
