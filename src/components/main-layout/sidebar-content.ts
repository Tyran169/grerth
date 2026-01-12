import {
  IconBellRinging2,
  IconCamera,
  // IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  // IconFolder,
  IconHelp,
  // IconListDetails,
  IconReport,
  IconSearch,
  IconSettings
  // IconUsers
} from '@tabler/icons-react';

export const data: AppSidebarData = {
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
      title: 'Sonner Toasts',
      url: '/toast',
      icon: IconBellRinging2
    }
    // {
    //   title: 'Lifecycle',
    //   url: '#',
    //   icon: IconListDetails
    // },
    // {
    //   title: 'Analytics',
    //   url: '#',
    //   icon: IconChartBar
    // },
    // {
    //   title: 'Projects',
    //   url: '#',
    //   icon: IconFolder
    // },
    // {
    //   title: 'Team',
    //   url: '#',
    //   icon: IconUsers
    // }
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
