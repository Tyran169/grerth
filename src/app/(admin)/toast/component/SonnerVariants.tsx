'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

export default function SonnerVariants() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-22 h-9 px-4 py-2" />
        ))}
      </div>
    );
  }

  return (
    <div
      className="toaster flex flex-wrap gap-2"
      data-sonner-theme={resolvedTheme}
    >
      <Button
        key="default"
        variant="outline"
        className="toast w-22"
        data-rich-colors
        style={{
          background: 'var(--toast-bg)',
          color: 'var(--toast-text)',
          borderColor: 'var(--toast-border)'
        }}
        onClick={() =>
          toast(toastContent.default.title, toastContent.default.option)
        }
      >
        Default
      </Button>
      {(['info', 'success', 'warning', 'error'] as const).map((type) => (
        <Button
          key={type}
          variant="outline"
          className={`toast ${type} w-22`}
          data-rich-colors
          style={{
            background: 'var(--toast-bg)',
            color: 'var(--toast-text)',
            borderColor: 'var(--toast-border)'
          }}
          onClick={() =>
            toast[type](toastContent[type].title, toastContent[type].option)
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Button>
      ))}
    </div>
  );
}

const toastAction: NonNullable<Parameters<typeof toast>[1]> = {
  action: { label: 'Undo', onClick: () => console.log('Undone!') },
  cancel: { label: 'Close', onClick: () => console.log('Closed!') }
};

const toastContent: {
  [key: string]: {
    title: Parameters<typeof toast>[0];
    option: Parameters<typeof toast>[1];
  };
} = {
  default: {
    title: 'Event has been created',
    option: {
      description: 'You can now view and manage your event.',
      ...toastAction
    }
  },
  success: {
    title: 'Event has been created',
    option: {
      description: 'You can now view and manage your event.',
      ...toastAction
    }
  },
  info: {
    title: 'Prepare for your event',
    option: {
      description: 'Be at the area 10 minutes before the event time.',
      ...toastAction
    }
  },
  warning: {
    title: 'Please choose a different time',
    option: {
      description: 'Event start time cannot be earlier than 8am.',
      ...toastAction
    }
  },
  error: {
    title: 'Event has not been created',
    option: {
      description:
        'There was an error while creating your event. Please try again.',
      ...toastAction
    }
  }
};
