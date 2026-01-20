'use client';

// import { NavDocuments } from '@/components/main-layout/nav-documents';
import { NavMain } from '@/components/main-layout/nav-main';
// import { NavSecondary } from '@/components/main-layout/nav-secondary';
import { NavUser } from '@/components/main-layout/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { data } from './sidebar-content';
import Logo from '@/assets/images/logo.png';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="sticky" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="Main Logo"
                width={32}
                height={32}
                loading="eager"
                fetchPriority="high"
              />
              <span className="text-base font-semibold">Grerth</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent style={{ scrollbarWidth: 'thin' }}>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
        <RouteListener />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

function RouteListener() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  const prevPathRef = useRef<string | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // ignore first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathRef.current = pathname;
      return;
    }

    // only close mobile nav when path changes
    if (prevPathRef.current !== pathname && isMobile) {
      setOpenMobile(false);
      prevPathRef.current = pathname;
    }
  }, [pathname, setOpenMobile, isMobile]);

  return null;
}
