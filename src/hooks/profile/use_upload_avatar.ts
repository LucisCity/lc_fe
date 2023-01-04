import { useSnackbar } from "notistack";
import axios from "axios";
import UserStore from "../../store/user.store";
import { FileUpload } from "./account/use_kyc";

export const REST_API_ENDPOINT =
  process.env.NEXT_PUBLIC_GRAPHQL_URL?.substring(0, process.env.NEXT_PUBLIC_GRAPHQL_URL.lastIndexOf("/")) + "/api";

export function useUploadAvatar() {
  const { enqueueSnackbar } = useSnackbar();

  const uploadImages = async (input: FileUpload): Promise<boolean> => {
    // console.log(input.file);
    // Create an object of formData
    const formData = new FormData();
    let success = false;
    formData.append(input.fieldName, input.file);

    // Request made to the backend api
    // Send formData object
    if (REST_API_ENDPOINT) {
      const postUrl = REST_API_ENDPOINT + "/upload_avatar";
      // console.log(`postUrl ${postUrl}`);
      await axios
        .post(postUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${UserStore.token}`,
          },
        })
        .then((res) => {
          if (res?.data) {
            // console.log(res.data);
            UserStore.updateAvatar(res.data);
            enqueueSnackbar("Đổi ảnh đại diện thành công", { variant: "success" });
            success = true;
          }
        })
        .catch((err) => {
          enqueueSnackbar(err.message, { variant: "error" });
        });
    }

    return success;
  };

  return {
    uploadImages,
  };
}
