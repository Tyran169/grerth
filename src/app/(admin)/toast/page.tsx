import { Separator } from '@/components/ui/separator';
import SonnerVariants from './component/SonnerVariants';
import PromiseSonnerBtn from './component/PromiseSonnerBtn';
import HeadlessSonnerBtn from './component/HeadlessSonnerBtn';
import SiteTitle from '@/components/main-layout/site-title';

function Title({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 scroll-m-20 text-lg font-bold tracking-tight">
      {children}
    </p>
  );
}

export default async function SonnerTypes() {
  return (
    <SiteTitle title="Toast Notifications">
      <div className="p-8">
        <Title>Default Style</Title>
        <SonnerVariants />
        <Separator className="my-4 w-full" />
        <Title>Rich Colors Style</Title>
        <SonnerVariants richColors />
        <Separator className="my-4 w-full" />
        <Title>Inverted Colors Style</Title>
        <SonnerVariants invertColors />
        <Separator className="my-4 w-full" />
        <Title>Inverted Colors + Rich Colors Style</Title>
        <SonnerVariants richColors invertColors />
        <Separator className="my-4 w-full" />
        <Title>Promise Toast</Title>
        <PromiseSonnerBtn />
        <Separator className="my-4 w-full" />
        <Title>Headless Toast</Title>
        <HeadlessSonnerBtn />
      </div>
    </SiteTitle>
  );
}
