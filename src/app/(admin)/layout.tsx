import { AppSidebar } from '@/components/main-layout/app-sidebar';
import { SiteFooter } from '@/components/main-layout/site-footer';
import { SiteHeader } from '@/components/main-layout/site-header';
import { SiteTitleProvider } from '@/components/main-layout/site-title';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react';

async function SidebarContent({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

  return (
    <SidebarProvider
      className="pb-2"
      defaultOpen={defaultOpen}
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 72)',
          '--header-height': 'calc(var(--spacing) * 12)'
        } as React.CSSProperties
      }
    >
      <SiteTitleProvider>
        <AppSidebar variant="inset" />
        <SidebarInset className="ml-0!">
          <SiteHeader />
          {children}
        </SidebarInset>
      </SiteTitleProvider>
    </SidebarProvider>
  );
}

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div className="h-screen w-full" />}>
        <SidebarContent>{children}</SidebarContent>
      </Suspense>
      <SiteFooter />
    </>
  );
}
