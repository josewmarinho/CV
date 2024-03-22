import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';

import { Modal, ModalButton, ModalContent } from '@/shared/components/modal';

import LogoOIG from '../../public/oig-logo-01.jpg';

function HeaderModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Modal open={openModal} onOpenChange={setOpenModal}>
      <ModalButton className="text-white-50">
        <TiThMenu />
      </ModalButton>
      <ModalContent>
        <div className="gap mt-4 flex h-full w-full flex-col items-center gap-1 bg-white-950">
          <Image
            src={LogoOIG}
            alt="Logo OIG"
            className="h-16 w-16 cursor-pointer object-contain"
          />

          <Link
            href={'/'}
            className="mt-4 flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>HOME</p>
          </Link>
          <Link
            href={'/'}
            className="flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>HISTÓRIA</p>
          </Link>
          <Link
            href={'/'}
            className="flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>PRODUTOS</p>
          </Link>
          <Link
            href={'/'}
            className="flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>CONTATO</p>
          </Link>
          <a
            href={'https://office.oig.capital/'}
            className="flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>OIG CAPITAL</p>
          </a>
          <a
            href={'https://office.oig.capital/'}
            className="flex h-8 w-full items-center justify-center rounded-sm border bg-white-951 text-xs text-white-50 duration-500 hover:bg-white-950 hover:text-yellow-300"
          >
            <p>ÁREA DO ACIONISTA</p>
          </a>
          <div className="mt-6 flex w-full flex-row justify-around text-white-50">
            <a
              className="duration-500 hover:text-yellow-300"
              href={'https://m.facebook.com/oneinternetgroup'}
            >
              <FaFacebook size={25} />
            </a>
            <a
              className="duration-500 hover:text-yellow-300"
              href={'https://www.linkedin.com/company/one-internet-group/'}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              className="duration-500 hover:text-yellow-300"
              href={'https://www.instagram.com/oneinternetgroup/'}
            >
              <FaInstagramSquare size={25} />
            </a>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

export default HeaderModal;
