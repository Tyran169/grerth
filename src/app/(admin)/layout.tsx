import { AppSidebar } from '@/components/main-layout/app-sidebar';
import { SiteFooter } from '@/components/main-layout/site-footer';
import { SiteHeader } from '@/components/main-layout/site-header';
import { SiteTitleProvider } from '@/components/main-layout/site-title';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider
        className="pb-2"
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
      <SiteFooter />
    </>
  );
}
