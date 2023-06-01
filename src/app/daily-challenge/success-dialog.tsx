import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

interface Props {
  isOpen?: boolean;
  handleClose: () => void;
  timer: number;
}

const SuccessDialog = ({ isOpen, handleClose, timer }: Props) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-white/50 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] flex max-h-[85vh] min-h-[20rem] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-[6px] bg-primary-100 px-8 py-10 text-center focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-2xl font-medium">
            Daily challenge complete!
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] leading-normal">
            Completed in {timer} seconds
          </Dialog.Description>

          <p className="mt-auto">
            <Link href="/sign-in" className="underline">
              Sign in
            </Link>{" "}
            to get ranked on the leaderboard!
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SuccessDialog;
