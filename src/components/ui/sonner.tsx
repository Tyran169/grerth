'use client';

import { useEffect } from 'react';
import {
  CircleCheckIcon,
  CircleEllipsisIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, useSonner, type ToasterProps } from 'sonner';

const RESTYLE_ELEMENT_ID = 'restyled-sonner-toast';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  useEffect(() => {
    if (document.getElementById(RESTYLE_ELEMENT_ID)) return;

    const style = document.createElement('style');
    style.id = RESTYLE_ELEMENT_ID;
    style.type = 'text/css';
    style.textContent = RESTYLE_CSS_RULES;
    document.head.appendChild(style);
  }, []);

  return (
    <>
      <EnsureDefaultIcon />
      <Sonner
        theme={theme as ToasterProps['theme']}
        className="toaster group"
        icons={{
          success: <CircleCheckIcon className="size-4" />,
          info: <InfoIcon className="size-4" />,
          warning: <TriangleAlertIcon className="size-4" />,
          error: <OctagonXIcon className="size-4" />,
          loading: <Loader2Icon className="size-4 animate-spin" />
        }}
        style={
          {
            // '--normal-bg': 'var(--popover)',
            // '--normal-text': 'var(--popover-foreground)',
            // '--normal-border': 'var(--border)',
            '--border-radius': 'var(--radius)'
          } as React.CSSProperties
        }
        toastOptions={{
          className: 'toast group',
          classNames: {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'error',
            loading: 'loading',
            closeButton: 'close-btn',
            actionButton: 'action-btn',
            cancelButton: 'cancel-btn',
            content: 'content',
            title: 'title',
            description: 'description',
            icon: 'icon'
          }
        }}
        visibleToasts={6}
        duration={5000}
        {...props}
      />
    </>
  );
};

type ToastTypes = NonNullable<
  ReturnType<typeof useSonner>['toasts'][number]['type']
>;

const SONNER_ICON_SUPPORTED_TYPES = new Set<ToastTypes>([
  'success',
  'info',
  'warning',
  'error',
  'loading'
]);

function EnsureDefaultIcon() {
  const { toasts } = useSonner();

  useEffect(() => {
    // Intentionally mutates Sonner toast objects.
    // Relies on current Sonner behavior: toast objects are mutable and reused across renders.
    // This effect is idempotent.
    //
    // Ensures a default icon for toasts that:
    // - have no explicit icon or jsx
    // - and either have no type, or use a type not supported by Sonner’s built-in icons
    toasts.forEach((toast) => {
      if (
        toast.type !== undefined &&
        SONNER_ICON_SUPPORTED_TYPES.has(toast.type)
      )
        return;
      if (toast.icon !== undefined) return;
      if (toast.jsx !== undefined) return;

      toast.icon = <CircleEllipsisIcon className="size-4" />;
    });
  }, [toasts]);

  return null;
}

const RESTYLE_CSS_RULES = `
  /* ----- Global Variable Declarations ----- */

  .toaster,
  .toaster[data-sonner-theme='light'],
  .toaster[data-sonner-theme='dark'] .toast[data-invert='true'] {
    --normal-bg: hsl(0, 0%, 100%);
    --normal-border: hsl(0, 0%, 89.8%);
    --normal-text: hsl(0, 0%, 4%);

    --success-bg: hsl(143, 85%, 96%);
    --success-border: hsl(145, 92%, 87%);
    --success-text: hsl(140, 100%, 27%);

    --info-bg: hsl(208, 100%, 97%);
    --info-border: hsl(221, 91%, 93%);
    --info-text: hsl(210, 92%, 45%);

    --warning-bg: hsl(49, 100%, 97%);
    --warning-border: hsl(49, 91%, 84%);
    --warning-text: hsl(31, 92%, 45%);

    --error-bg: hsl(359, 100%, 97%);
    --error-border: hsl(359, 100%, 94%);
    --error-text: hsl(360, 100%, 45%);
  }

  .toaster[data-sonner-theme='dark'],
  .toaster[data-sonner-theme='light'] .toast[data-invert='true'] {
    --normal-bg: hsl(0, 0%, 8%);
    --normal-border: hsl(0, 0%, 17%);
    --normal-text: hsl(0, 0%, 98%);

    --success-bg: hsl(150, 100%, 6%);
    --success-border: hsl(147, 100%, 12%);
    --success-text: hsl(150, 86%, 65%);

    --info-bg: hsl(215, 100%, 6%);
    --info-border: hsl(223, 43%, 17%);
    --info-text: hsl(216, 87%, 65%);

    --warning-bg: hsl(64, 100%, 6%);
    --warning-border: hsl(60, 100%, 9%);
    --warning-text: hsl(46, 87%, 65%);

    --error-bg: hsl(358, 76%, 10%);
    --error-border: hsl(357, 89%, 16%);
    --error-text: hsl(358, 100%, 81%);
  }

  .toaster .toast {
    --toast-text: var(--normal-text);
    --toast-bg: var(--normal-bg);
    --toast-border: var(--normal-border);
  }

  .toaster .toast.success {
    --toast-text: var(--success-text);
    --toast-bg: var(--success-bg);
    --toast-border: var(--success-border);
  }

  .toaster .toast.info {
    --toast-text: var(--info-text);
    --toast-bg: var(--info-bg);
    --toast-border: var(--info-border);
  }

  .toaster .toast.warning {
    --toast-text: var(--warning-text);
    --toast-bg: var(--warning-bg);
    --toast-border: var(--warning-border);
  }

  .toaster .toast.error {
    --toast-text: var(--error-text);
    --toast-bg: var(--error-bg);
    --toast-border: var(--error-border);
  }

  /* ----- Restyle Sonner Toast ----- */

  .toaster .toast {
    border: 1px solid var(--toast-border) !important;
  }

  /* ----- Restyle Sonner Toast Icon ----- */

  .toaster .toast .icon {
    color: var(--toast-text) !important;
  }

  /* ----- Restyle Sonner Toast Content ----- */

  .toaster .toast .title {
    color: inherit !important;
  }

  .toaster .toast .description {
    color: inherit !important;
  }

  /* ----- Restyle Sonner Toast Close Buttons ----- */

  .toaster .toast .close-btn,
  .toaster .toast .close-btn:hover,
  .toaster .toast .close-btn:focus {
    background: inherit !important;
    border-color: inherit !important;
    color: inherit !important;
  }

  /* ----- Restyle Sonner Toast Cancel Buttons ----- */

  .toaster .toast .cancel-btn,
  .toaster .toast .cancel-btn:hover,
  .toaster .toast .cancel-btn:focus {
    background: transparent !important;
    color: inherit !important;
    border: 1px solid var(--toast-text) !important;
  }

  /* ----- Restyle Sonner Toast Action Buttons ----- */

  .toaster .toast .action-btn,
  .toaster .toast .action-btn:hover,
  .toaster .toast .action-btn:focus {
    background: var(--toast-text) !important;
    color: var(--toast-bg) !important;
    border: 1px solid var(--toast-text) !important;
  }

  /* ----- Align Sonner Toast Action and Cancel Buttons ----- */

  .toaster .toast .cancel-btn,
  .toaster .toast .action-btn {
    margin-left: auto !important;
  }

  .toaster .toast .cancel-btn ~ .action-btn:last-child {
    margin-left: 0 !important;
  }
`
  .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
  .replace(/\s+/g, ' ') // collapse whitespace
  .replace(/\s*([:;{},])\s*/g, '$1') // remove space around tokens
  .trim();

export { Toaster };
