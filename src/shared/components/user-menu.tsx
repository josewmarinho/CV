import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { TiThMenu } from 'react-icons/ti';

export const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();
  useEffect(() => {
    if (open) {
      controls.start('open');
    }
  }, [controls, open]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="hover:bg-gray-200/50 data-[state=open]:bg-gray-200/75 cursor-default select-none rounded bg-white-50 text-2xl focus-visible:outline-none">
        <TiThMenu />
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="end"
              className="mt-1 overflow-hidden rounded bg-white-50 p-2 text-left shadow backdrop-blur"
              asChild
            >
              <motion.div
                className="flex w-48 flex-col items-start gap-2"
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: 'easeOut', duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.2 },
                  },
                }}
              >
                <span>aaaa</span>
                <span>aaaa</span>
                <span>aaaa</span>
                <span>aaaa</span>
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};
