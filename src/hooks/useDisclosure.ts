import { useState } from "react";

type TUseDisclosure = [boolean, { open: () => void; close: () => void }];

export const useDisclosure = (): TUseDisclosure => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return [open, { open: handleOpen, close: handleClose }];
};
