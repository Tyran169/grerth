import { connection } from 'next/server';
import { Suspense } from 'react';

export async function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="py-10 min-h-32 bg-linear-to-br from-secondary to-secondary/80 text-secondary-foreground relative overflow-hidden isolate">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(from_var(--secondary-foreground)_r_g_b/0.075)_1px,transparent_1px),linear-gradient(to_bottom,rgba(from_var(--secondary-foreground)_r_g_b/0.075)_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        {/* Content goes here */}
        <div className="container mx-auto px-4 md:px-6 relative"></div>
      </div>
      <div className="text-center text-sm font-bold opacity-80 p-2.5 ">
        <Suspense>
          <FooterText />
        </Suspense>
      </div>
    </footer>
  );
}

export async function FooterText() {
  await connection();
  return (
    <div>© {new Date().getFullYear()} YourCompany. All rights reserved.</div>
  );
}
