import { useState } from "react";

export const useDisclosure = (): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return [open, handleClose, handleOpen];
};
