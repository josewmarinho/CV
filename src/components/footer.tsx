import Image from 'next/image';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneVolume } from 'react-icons/fa6';

import LogoO3 from '../../public/oig-logo-03.png';

function Footer() {
  return (
    <main className="mt-4 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
      <Image
        src={LogoO3}
        alt="Logo OIG"
        className="h-[200px] w-[200px] rounded-2xl lg:object-contain"
      />
      <div className="flex flex-col text-justify text-white-50">
        <span className="font-bold">One Internet S.A. </span>
        <span className="font-bold">CNPJ: </span>
        <span> Av. Senador Arêa Leão,</span>
        <span>2185 T2, 13º Andar,</span>
        <span> Jóquei, Teresina - PI </span>
      </div>
      <div className="mb-20 flex flex-col items-center justify-center gap-1 lg:mb-0">
        <div className="flex flex-row items-center justify-center gap-2 text-white-50">
          <FaPhoneVolume />
          <span> +55 (11) 3042-4918 </span>
        </div>
        <div className="flex flex-row items-center justify-center gap-2 text-white-50">
          <IoMdMail />
          <span>contato@oneinternetgroup.com </span>
        </div>
      </div>
    </main>
  );
}

export default Footer;
