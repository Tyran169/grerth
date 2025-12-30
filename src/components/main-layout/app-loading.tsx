'use client';

import { cn } from '@/lib/utils';
import React, { HTMLProps } from 'react';
import GridLoader from 'react-spinners/GridLoader';

interface AppLoadingProps extends HTMLProps<HTMLDivElement> {
  loadingColor?: string;
}

const AppLoading: React.FC<AppLoadingProps> = React.memo(
  ({ className, loadingColor = 'hsl(var(--primary))', ...props }) => {
    return (
      <div
        className={cn(
          'w-full h-full flex justify-center items-center bg-background backdrop-blur',
          className
        )}
        aria-busy="true"
        {...props}
      >
        <GridLoader color={loadingColor} />
      </div>
    );
  }
);

AppLoading.displayName = 'AppLoading';

export default AppLoading;
