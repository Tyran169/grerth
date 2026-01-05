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

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <>
      <RestyleToast />
      <EnsureDefaultIcon />
      <Sonner
        theme={theme as ToasterProps['theme']}
        containerAriaLabel="Toast Notifications"
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
            '--border-radius': 'var(--radius)'
          } as React.CSSProperties
        }
        toastOptions={{
          // style: {
          //   '--normal-bg': 'var(--popover)',
          //   '--normal-text': 'var(--popover-foreground)',
          //   '--normal-border': 'var(--border)'
          // } as React.CSSProperties,
          className: 'toast group',
          classNames: {
            success: 'success',
            info: 'info',
            warning: 'warning',
            error: 'error',
            loading: 'loading',
            closeButton: 'close-btn',
            actionButton: 'action-btn',
            cancelButton: 'cancel-btn'
          }
        }}
        richColors
        closeButton
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
    // Sonner toasts are mutable; this effect is idempotent.
    // Ensures a default icon for toasts without type/icon/jsx (undefined)
    // and if type of each toast outside of types that Sonner provides icons for (info, success, warning, error, loading).
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

function RestyleToast() {
  useEffect(() => {
    const id = 'restyled-sonner-toast';

    //avoid duplicate injection (StrictMode / Fast Refresh)
    if (document.getElementById(id)) return;

    const style = document.createElement('style');
    style.id = id;
    style.type = 'text/css';
    style.textContent = RESTYLE_SONNER_TOAST;
    document.head.appendChild(style);

    // optional: cleanup on unmount
    return () => {
      // Global Sonner styles are injected once and shared
      // across all Sonner containers in the app.
      // Only remove styles if no Sonner containers remain.
      const containers = document.querySelectorAll(
        '[aria-label*="Toast Notifications"]'
      );
      if (containers.length > 0) return;

      document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}

const RESTYLE_SONNER_TOAST = `
  /*------------------------------*/
  /* Global Variable Declarations */
  /*------------------------------*/

  .toaster,
  .toaster[data-sonner-theme='light'],
  .toaster[data-sonner-theme='dark'] .toast[data-invert='true'] {
    --normal-bg: hsl(0, 0%, 100%) !important;
    --normal-border: hsl(0, 0%, 89.8%) !important;
    --normal-text: hsl(0, 0%, 4%) !important;

    --success-bg: hsl(143, 85%, 96%) !important;
    --success-border: hsl(145, 92%, 87%) !important;
    --success-text: hsl(140, 100%, 27%) !important;

    --info-bg: hsl(208, 100%, 97%) !important;
    --info-border: hsl(221, 91%, 93%) !important;
    --info-text: hsl(210, 92%, 45%) !important;

    --warning-bg: hsl(49, 100%, 97%) !important;
    --warning-border: hsl(49, 91%, 84%) !important;
    --warning-text: hsl(31, 92%, 45%) !important;

    --error-bg: hsl(359, 100%, 97%) !important;
    --error-border: hsl(359, 100%, 94%) !important;
    --error-text: hsl(360, 100%, 45%) !important;
  }

  .toaster[data-sonner-theme='dark'],
  .toaster[data-sonner-theme='light'] .toast[data-invert='true'] {
    --normal-bg: hsl(0, 0%, 8%) !important;
    --normal-border: hsl(0, 0%, 17%) !important;
    --normal-text: hsl(0, 0%, 98%) !important;

    --success-bg: hsl(150, 100%, 6%) !important;
    --success-border: hsl(147, 100%, 12%) !important;
    --success-text: hsl(150, 86%, 65%) !important;

    --info-bg: hsl(215, 100%, 6%) !important;
    --info-border: hsl(223, 43%, 17%) !important;
    --info-text: hsl(216, 87%, 65%) !important;

    --warning-bg: hsl(64, 100%, 6%) !important;
    --warning-border: hsl(60, 100%, 9%) !important;
    --warning-text: hsl(46, 87%, 65%) !important;

    --error-bg: hsl(358, 76%, 10%) !important;
    --error-border: hsl(357, 89%, 16%) !important;
    --error-text: hsl(358, 100%, 81%) !important;
  }

  .toaster .toast {
    --toast-text: var(--normal-text);
    --toast-bg: var(--normal-bg);
    --toast-border: var(--normal-border);
  }

  .toaster .toast[data-rich-colors=true].success {
    --toast-text: var(--success-text);
    --toast-bg: var(--success-bg);
    --toast-border: var(--success-border);
  }

  .toaster .toast[data-rich-colors=true].info {
    --toast-text: var(--info-text);
    --toast-bg: var(--info-bg);
    --toast-border: var(--info-border);
  }

  .toaster .toast[data-rich-colors=true].warning {
    --toast-text: var(--warning-text);
    --toast-bg: var(--warning-bg);
    --toast-border: var(--warning-border);
  }

  .toaster .toast[data-rich-colors=true].error {
    --toast-text: var(--error-text);
    --toast-bg: var(--error-bg);
    --toast-border: var(--error-border);
  }

  /*------------------------------------*/
  /* Restyle Sonner Toast Close Buttons */
  /*------------------------------------*/

  .toaster .toast .close-btn,
  .toaster .toast .close-btn:hover,
  .toaster .toast .close-btn:focus {
    background: inherit !important;
    border-color: inherit !important;
    color: inherit !important;
  }

  /*-------------------------------------*/
  /* Restyle Sonner Toast Cancel Buttons */
  /*-------------------------------------*/

  .toaster .toast .cancel-btn,
  .toaster .toast .cancel-btn:hover,
  .toaster .toast .cancel-btn:focus {
    background: transparent !important;
    color: inherit !important;
    border: 1px solid var(--toast-text) !important;
  }

  /*-------------------------------------*/
  /* Restyle Sonner Toast Action Buttons */
  /*-------------------------------------*/

  .toaster .toast .action-btn,
  .toaster .toast .action-btn:hover,
  .toaster .toast .action-btn:focus {
    background: var(--toast-text) !important;
    color: var(--toast-bg) !important;
    border: 1px solid var(--toast-text) !important;
  }

  /*----------------------------------------------*/
  /* Align Sonner Toast Action and Cancel Buttons */
  /*----------------------------------------------*/

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
