import { Route } from 'next';

declare global {
  type Icon = (props: React.ComponentProps<'svg'>) => JSX.Element;

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
}
