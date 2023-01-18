import { ChangeEvent, useEffect, useState } from "react";

export function useFileInput(imageUrl?: string) {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();
  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    // console.log(`imageUrl ${imageUrl}`);
    if (imageUrl) {
      setPreview(imageUrl);
      return;
    }
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(files?.[0]);
  };

  return {
    selectedFile,
    setSelectedFile,
    preview,
    setPreview,
    onSelectFile,
  };
}
