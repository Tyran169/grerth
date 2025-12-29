import { Separator } from '@/components/ui/separator';
import SonnerVariants from './component/SonnerVariants';
import PromiseSonnerBtn from './component/PromiseSonnerBtn';
import HeadlessSonnerBtn from './component/HeadlessSonnerBtn';

export default async function SonnerTypes() {
  return (
    <div className="p-8">
      <SonnerVariants />
      <Separator className="my-4 w-full" />
      <PromiseSonnerBtn />
      <Separator className="my-4 w-full" />
      <HeadlessSonnerBtn />
    </div>
  );
}
