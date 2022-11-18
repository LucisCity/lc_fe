import { remove } from "mobx";
import { ChangeEventHandler, useEffect, useState } from "react";
import { round } from "../utils/number.utils";

export type Preview = { url: string; name: string; type: string; id?: number };

export function useFileInput(
  allow_empty = true,
  extend_mode = false,
  max_total_size = 10
) {
  const [value, setValue] = useState<File[]>();
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [old_previews, setOldPreviews] = useState<Preview[]>([]);
  const [allow_clear_preview, setAllowClearPreview] = useState(true);
  const [total_size, setTotalSize] = useState(0);

  useEffect(() => {
    return () => {
      if (!allow_clear_preview) {
        return;
      }
      clearPreviews(old_previews);
      setAllowClearPreview(true);
    };
  }, [old_previews, allow_clear_preview]);

  function clear() {
    clearPreviews(previews);
    setValue(undefined);
    setPreviews([]);
    setOldPreviews([]);
    setTotalSize(0);
  }

  function clearPreviews(_previews: Preview[]) {
    for (let item of _previews) {
      URL.revokeObjectURL(item.url);
    }
  }

  function remove(file_name?: string) {
    if (!file_name) {
      clear();
    }
    let _old_preview = previews.find((item) => item.name === file_name);
    if (!_old_preview) {
      return;
    }
    let _files = value!.filter((item) => item.name !== file_name);
    setValue(_files);
    setPreviews(previews.filter((item) => item.name !== file_name));
    setTotalSize(getTotalSize(_files));
    clearPreviews([_old_preview]);
  }

  function removeAtIndex(index?: number) {
    if (index == null) {
      return;
    }
    let _old_preview = previews.find((_, idx) => index === idx);
    if (!_old_preview) {
      return;
    }
    let _files = value!.filter((_, idx) => idx !== index);
    setValue(_files);
    // remove selected preview
    setPreviews(previews.filter((_, idx) => idx !== index));
    setTotalSize(getTotalSize(_files));
    clearPreviews([_old_preview]);
  }

  function updatePreview(files: File[]) {
    let _preview_urls: Preview[] = [];
    for (let item of files) {
      _preview_urls.push({
        url: URL.createObjectURL(item),
        name: item.name,
        type: item.type,
      });
    }
    console.log("_preview_urls:", _preview_urls);
    setPreviews((old) =>
      extend_mode ? [...old, ..._preview_urls] : _preview_urls
    );
    setAllowClearPreview(false);
    setOldPreviews((old) =>
      extend_mode ? [...old, ..._preview_urls] : _preview_urls
    );
  }

  function getTotalSize(_files: File[]) {
    let total = 0;
    for (let item of _files) {
      total += item.size;
    }
    return total / 1024 / 1024;
  }

  const onChange = function (_value: any) {
    // console.log("value: ", _value);
    if (typeof _value === "object") {
      let files = (_value.target?.files ?? _value.dataTransfer.files) as File[];
      if (files && files.length > 0) {
        let size = getTotalSize(files);
        if (extend_mode) {
          let total = total_size + size;
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
      } else if (allow_empty) {
        clear();
      }
    } else if (allow_empty) {
      clear();
    }
    return false;
  };

  function setPesudoFile(files: File[]) {
    setValue(files);
  }

  function swap(old_idx: number, new_idx: number) {
    if (!value) {
      return;
    }
    if (value.length > Math.max(old_idx, new_idx)) {
      let swap_item = value[old_idx];
      value[old_idx] = value[new_idx];
      value[new_idx] = swap_item;
      setValue(value);
    }

    let swap_preview = previews[old_idx];
    previews[old_idx] = previews[new_idx];
    previews[new_idx] = swap_preview;
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
    total_size,
    setPesudoFile,
  };
}
