import { useState } from "react";

export function useModal<T>() {
  const [isOpen, setOpen] = useState(false);
  const [data, setData] = useState<T>();

  function onOpen() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }

  function onCloseWith(value?: T) {
    onClose();
    setData(value);
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onCloseWith,
    data,
    setData,
  };
}
