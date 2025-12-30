'use client';

import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers
} from '@tabler/icons-react';

import { NavDocuments } from '@/components/main-layout/nav-documents';
import { NavMain } from '@/components/main-layout/nav-main';
import { NavSecondary } from '@/components/main-layout/nav-secondary';
import { NavUser } from '@/components/main-layout/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar';
import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

type AppSidebarData = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  navMain: {
    title: string;
    url: Route;
    icon: typeof IconDashboard;
  }[];
  navClouds: {
    title: string;
    icon: typeof IconCamera;
    isActive?: boolean;
    url: Route;
    items: {
      title: string;
      url: Route;
    }[];
  }[];
  navSecondary: {
    title: string;
    url: Route;
    icon: typeof IconSettings;
  }[];
  documents: {
    name: string;
    url: Route;
    icon: typeof IconDatabase;
  }[];
};

const data: AppSidebarData = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: 'https://github.com/shadcn.png'
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      icon: IconDashboard
    },
    {
      title: 'Lifecycle',
      url: '/toast',
      icon: IconListDetails
    },
    {
      title: 'Analytics',
      url: '#',
      icon: IconChartBar
    },
    {
      title: 'Projects',
      url: '#',
      icon: IconFolder
    },
    {
      title: 'Team',
      url: '#',
      icon: IconUsers
    }
  ],
  navClouds: [
    {
      title: 'Capture',
      icon: IconCamera,
      isActive: true,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#'
        },
        {
          title: 'Archived',
          url: '#'
        }
      ]
    },
    {
      title: 'Proposal',
      icon: IconFileDescription,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#'
        },
        {
          title: 'Archived',
          url: '#'
        }
      ]
    },
    {
      title: 'Prompts',
      icon: IconFileAi,
      url: '#',
      items: [
        {
          title: 'Active Proposals',
          url: '#'
        },
        {
          title: 'Archived',
          url: '#'
        }
      ]
    }
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '#',
      icon: IconSettings
    },
    {
      title: 'Get Help',
      url: '#',
      icon: IconHelp
    },
    {
      title: 'Search',
      url: '#',
      icon: IconSearch
    }
  ],
  documents: [
    {
      name: 'Data Library',
      url: '#',
      icon: IconDatabase
    },
    {
      name: 'Reports',
      url: '#',
      icon: IconReport
    },
    {
      name: 'Word Assistant',
      url: '#',
      icon: IconFileWord
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="sticky" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent style={{ scrollbarWidth: 'thin' }}>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        <RouteListener />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

export function RouteListener() {
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
