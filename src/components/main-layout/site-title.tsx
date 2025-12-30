'use client';

import React, { createContext, useContext, useState } from 'react';
import { cn } from '@/lib/utils';
import { useMounted } from '@/hooks/use-mounted';
import { Skeleton } from '../ui/skeleton';

interface SiteTitleContext {
  title: React.ReactNode;
  setTitle: (title: React.ReactNode) => void;
}

const SiteTitleContext = createContext<SiteTitleContext | undefined>(undefined);

export function SiteTitleProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<React.ReactNode>('');

  return (
    <SiteTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </SiteTitleContext.Provider>
  );
}

export function useSiteTitle() {
  const context = useContext(SiteTitleContext);
  if (!context) {
    throw new Error('useSiteTitle must be used within SiteTitleProvider');
  }
  return context;
}

type SiteTitleProps = React.PropsWithChildren & {
  title?: React.ReactNode;
};

const SiteTitle: React.FC<SiteTitleProps> = ({
  title = 'My Site',
  children
}) => {
  const { setTitle } = useSiteTitle();

  React.useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);

  return children;
};

export const TitleHeader: React.FC<
  React.HTMLAttributes<HTMLHeadingElement>
> = ({ className, ...props }) => {
  const mounted = useMounted();
  const { title } = useSiteTitle();

  if (!mounted) {
    return <Skeleton className={cn('h-6 w-1/3', className)} />;
  }

  return (
    <h1 className={cn('text-base font-medium', className)} {...props}>
      {title}
    </h1>
  );
};

export default SiteTitle;
