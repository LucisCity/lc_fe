//@ts-ignore
import { saveAs } from "file-saver";

export function useDownload() {
  function download(url: string, filename?: string) {
    if (!filename) {
      const urls = url.split("/");
      filename = urls[urls.length - 1];
    }
    // saveAs(url, filename);
    // return;
    fetch(url, {
      cache: "no-cache",
      mode: "no-cors",
    })
      .then(async (res) => {
        const result = await res.arrayBuffer();
        // console.log("result: ", res.status);
        return result;
      })
      .then((res) => {
        _download(res, filename ?? "unknow.png");
      });
  }

  function _download(data: any, filename: string, mime?: string, bom?: any) {
    const blobData = typeof bom !== "undefined" ? [bom, data] : [data];
    const blob = new Blob(blobData, { type: mime || "application/octet-stream" });
    //@ts-ignore
    if (typeof window.navigator.msSaveBlob !== "undefined") {
      // IE workaround for "HTML7007: One or more blob URLs were
      // revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing
      // the URL has been freed."
      //@ts-ignore
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const blobURL =
        window.URL && window.URL.createObjectURL
          ? window.URL.createObjectURL(blob)
          : window.webkitURL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.style.display = "none";
      tempLink.href = blobURL;
      tempLink.setAttribute("download", filename);

      // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows you to download files in desktop safari if pop up blocking
      // is enabled.
      if (typeof tempLink.download === "undefined") {
        tempLink.setAttribute("target", "_blank");
      }

      document.body.appendChild(tempLink);
      tempLink.click();

      // Fixes "webkit blob resource error 1"
      setTimeout(function () {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }, 200);
    }
  }

  const captureAndDownloadElement = (id: string) => {
    const canvas = document.getElementById(id);
    if (!canvas) {
      return;
    }
    //@ts-ignore
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = id + ".png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return {
    download,
    captureAndDownloadElement,
  };
}
