import { gql, useQuery } from "@apollo/client";
import { GET_ACCOUNT_INFO } from "./use_info";
import axios from "axios";
import UserStore from "../../../store/user.store";
import { useSnackbar } from "notistack";
import { REST_API_ENDPOINT } from "../use_upload_avatar";

export const GET_KYC_IMAGES = gql`
  query getKycImages {
    getKycImages {
      front_id
      back_id
      holding_id
      status
    }
  }
`;

export interface FileUpload {
  fieldName: string;
  file: File;
}

export function useUserKyc() {
  const { enqueueSnackbar } = useSnackbar();

  const { loading, error, data } = useQuery(GET_KYC_IMAGES, {});

  const uploadImages = async (input: FileUpload[]): Promise<boolean> => {
    // Create an object of formData
    const formData = new FormData();
    let success = false;
    input.forEach((i) => {
      // console.log(i.file);
      formData.append(i.fieldName, i.file);
    });

    // Request made to the backend api
    // Send formData object
    if (REST_API_ENDPOINT) {
      const postUrl = REST_API_ENDPOINT + "/upload_kyc";
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
            enqueueSnackbar("Gửi yêu cầu xác minh thành công", { variant: "success" });
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
    loading: loading,
    error: error,
    data: data?.getKycImages,
    uploadImages,
  };
}
