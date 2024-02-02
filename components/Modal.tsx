"use client";

import useModal from "@/zustand/modal";
import { Dialog, DialogContent } from "./ui/dialog";
import { FC, ReactNode } from "react";

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  const { isOpen, setOpen } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={() => setOpen(!isOpen)}>
      <DialogContent className="max-w-2xl">{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
