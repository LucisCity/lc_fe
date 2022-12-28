import { useEffect, useState } from "react";
import { round } from "../utils/number.util";

export type Preview = { url: string; name: string; type: string; id?: number };

export function useFileInput(allowEmpty = true, extendMode = false) {
  const [value, setValue] = useState<File[]>();
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [oldPreviews, setOldPreviews] = useState<Preview[]>([]);
  const [allowClearPreview, setAllowClearPreview] = useState(true);
  const [totalSize, setTotalSize] = useState(0);

  useEffect(() => {
    return () => {
      if (!allowClearPreview) {
        return;
      }
      clearPreviews(oldPreviews);
      setAllowClearPreview(true);
    };
  }, [oldPreviews, allowClearPreview]);

  function clear() {
    clearPreviews(previews);
    setValue(undefined);
    setPreviews([]);
    setOldPreviews([]);
    setTotalSize(0);
  }

  function clearPreviews(previews: Preview[]) {
    for (const item of previews) {
      URL.revokeObjectURL(item.url);
    }
  }

  function remove(fileName?: string) {
    if (!fileName) {
      clear();
    }
    const oldPreview = previews.find((item) => item.name === fileName);
    if (!oldPreview) {
      return;
    }
    if (!value) {
      return;
    }
    const files = value.filter((item) => item.name !== fileName);
    setValue(files);
    setPreviews(previews.filter((item) => item.name !== fileName));
    setTotalSize(getTotalSize(files));
    clearPreviews([oldPreview]);
  }

  function removeAtIndex(index?: number) {
    if (index == null) {
      return;
    }
    const oldPreview = previews.find((_, idx) => index === idx);
    if (!oldPreview) {
      return;
    }
    if (!value) {
      return;
    }
    const files = value.filter((_, idx) => idx !== index);
    setValue(files);
    // remove selected preview
    setPreviews(previews.filter((_, idx) => idx !== index));
    setTotalSize(getTotalSize(files));
    clearPreviews([oldPreview]);
  }

  function updatePreview(files: File[]) {
    const previewUrls: Preview[] = [];
    for (const item of files) {
      previewUrls.push({
        url: URL.createObjectURL(item),
        name: item.name,
        type: item.type,
      });
    }
    console.log("previewUrls:", previewUrls);
    setPreviews((old) => (extendMode ? [...old, ...previewUrls] : previewUrls));
    setAllowClearPreview(false);
    setOldPreviews((old) => (extendMode ? [...old, ...previewUrls] : previewUrls));
  }

  function getTotalSize(files: File[]) {
    let total = 0;
    for (const item of files) {
      total += item.size;
    }
    return total / 1024 / 1024;
  }

  const onChange = function (_value: any) {
    // console.log("value: ", _value);
    if (typeof _value === "object") {
      const files = (_value.target?.files ?? _value.dataTransfer.files) as File[];
      if (files && files.length > 0) {
        const size = getTotalSize(files);
        if (extendMode) {
          const total = totalSize + size;
          if (total > 20) {
            console.warn("Total size > 20m");
            return false;
          }

          setValue((old) => [...(old ?? []), ...files]);
          updatePreview(files);
          setTotalSize(round(total, 2));
        } else {
          if (size > 20) {
            return false;
          }
          setValue(files);
          updatePreview(files);
          setTotalSize(round(size, 2));
        }
      } else if (allowEmpty) {
        clear();
      }
    } else if (allowEmpty) {
      clear();
    }
    return false;
  };

  function setPseudoFile(files: File[]) {
    setValue(files);
  }

  function swap(oldIdx: number, newIdx: number) {
    if (!value) {
      return;
    }
    if (value.length > Math.max(oldIdx, newIdx)) {
      const swapItem = value[oldIdx];
      value[oldIdx] = value[newIdx];
      value[newIdx] = swapItem;
      setValue(value);
    }

    const swapPreview = previews[oldIdx];
    previews[oldIdx] = previews[newIdx];
    previews[newIdx] = swapPreview;
    setPreviews(previews);
  }

  return {
    value,
    onChange,
    remove,
    removeAtIndex,
    swap,
    previews,
    setPreviews,
    totalSize,
    setPseudoFile,
  };
}
