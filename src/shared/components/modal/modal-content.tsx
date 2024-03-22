import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  subTitle?: string;

  children: ReactNode;
}

export default function ModalContent({ children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-white-950 opacity-85" />
      <Dialog.Content className="fixed left-1/2 top-1/2 h-[570px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white-950 p-4 shadow">
        <div className="justify-cente flex w-full flex-col items-center ">
          <Dialog.Close className="text-yellow-300">X</Dialog.Close>
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
