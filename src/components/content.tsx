import Image from 'next/image';

import LogoOIGBRAND from '../../public/oig-brand.jpg';
import LogoOIGCITY from '../../public/city-future.jpg';
import LogoOIGVISION from '../../public/glass-future.jpg';
import LogoOIGADS from '../../public/google-facebook-ads.jpg';

function Content() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center">
      <div className="mx-4 mt-4 flex flex-col items-center justify-center gap-8 lg:mx-12 lg:mt-12 lg:flex-row">
        <div className="flex flex-col gap-4">
          <span className="self-center font-bold text-white-50">O FUTURO</span>
          <Image
            src={LogoOIGCITY}
            alt="Logo OIG"
            className="h-[350px] w-[400px] rounded-2xl lg:object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="self-center font-bold text-white-50">
            O PRESENTE
          </span>
          <Image
            src={LogoOIGVISION}
            alt="Logo OIG"
            className="h-[350px] w-[400px] rounded-2xl lg:object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="self-center font-bold text-white-50">
            A FERRAMENTA
          </span>
          <Image
            src={LogoOIGADS}
            alt="Logo OIG"
            className="h-[350px] w-[400px] rounded-2xl lg:object-contain"
          />
        </div>
      </div>

      <div className=" mx-4 mt-12 flex flex-col gap-4 lg:mx-12">
        <span className="self-center text-lg font-bold text-white-50 underline">
          O CAMINHO
        </span>
        <div className="relative flex flex-col items-center">
          <Image
            src={LogoOIGBRAND}
            alt="Logo OIG"
            className="rounded-2xl object-contain"
          />
          <div className="w-30 absolute bottom-10 mt-8 flex h-12 cursor-pointer items-center justify-center rounded-lg bg-yellow-400 px-3 opacity-20 shadow-lg duration-200 hover:opacity-95 lg:h-16 lg:w-32">
            <span className="text-sm font-bold text-white-950">SAIBA MAIS</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
