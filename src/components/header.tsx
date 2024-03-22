import Image from 'next/image';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

import LogoOIG from '../../public/oig-logo-02.jpg';

import HeaderModal from './header-modal';

function Header() {
  return (
    <main className="mt-4 flex h-12 w-full max-w-[1024px]">
      <div className="mx-8 flex w-full flex-row items-center justify-center lg:justify-between">
        <Link href={'/'}>
          <Image
            src={LogoOIG}
            alt="Logo OIG"
            className="h-20 w-20 cursor-pointer object-contain"
          />
        </Link>
        <div className="hidden flex-row items-center justify-center gap-4 lg:flex">
          <Link
            className="text-white-50 duration-700 hover:text-yellow-300"
            href={'/'}
          >
            HOME
          </Link>
          <Link
            className="text-white-50 duration-700 hover:text-yellow-300"
            href={'/'}
          >
            HISTÓRIA
          </Link>
          <Link
            className="text-white-50 duration-700 hover:text-yellow-300"
            href={'/'}
          >
            PRODUTOS
          </Link>
          <Link
            className="text-white-50 duration-700 hover:text-yellow-300"
            href={'/'}
          >
            CONTATO
          </Link>
          <a
            className="text-white-50 duration-700 hover:text-yellow-300"
            href={'https://office.oig.capital/'}
          >
            OIG CAPITAL
          </a>
        </div>

        <a
          href={'https://office.oig.capital/'}
          className="hidden flex-row place-items-center justify-center gap-3 rounded-lg border border-white-50 p-3 text-white-50 duration-700 hover:border-yellow-300 hover:text-yellow-300 lg:flex"
        >
          <FaUser />
          <p className="text-xs">ÁREA DO ACIONISTA</p>
        </a>
      </div>
      <div className="absolute right-4 top-7 lg:hidden">
        <HeaderModal />
      </div>
    </main>
  );
}

export default Header;
