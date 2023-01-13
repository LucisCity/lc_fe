import { gql, useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../../utils/apolo.util";
import { isStrongPass } from "../../../../utils/password.util";
import { ErrorCode } from "../../../../gql/graphql";

export const CHANGE_PASSWORD_MUT = gql`
  mutation changePassword($oldPass: String, $newPass: String!) {
    changePassword(oldPass: $oldPass, newPass: $newPass)
  }
`;

export const HAS_PASSWORD_QUERY = gql`
  query hasPassWord {
    hasPassWord
  }
`;

export function useChangePassword() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const { data, loading: loadingHasPass } = useQuery<{ hasPassWord: boolean }>(HAS_PASSWORD_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
      });
    },
  });

  const [changePass, { loading: loadingChangePass }] = useMutation(CHANGE_PASSWORD_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Đổi mật khẩu thành công", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.UserNotFound:
            enqueueSnackbar("Không tìm thấy user", { variant: "error" });
            break;
          case "NEW_PASS_SAME_OLD_PASS":
            enqueueSnackbar("Mật khẩu mới trùng với mật khẩu hiện tại", { variant: "error" });
            break;
          case "WRONG_OLD_PASS":
            enqueueSnackbar("Mật khẩu hiện tại không đúng", { variant: "error" });
            break;
          case "INVALID_NEW_PASS":
            enqueueSnackbar("Mật khẩu mới không hợp lệ (mật khẩu hợp lệ phải có 8-32 ký tự, bao gồm cả số và chữ", {
              variant: "error",
            });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  async function onChangePass(oldPass: string, newPass: string, confirmPass: string) {
    // console.log(`oldPass ${oldPass} newPass ${newPass} confirmPass ${confirmPass}`);
    if (!isStrongPass(newPass)) {
      form.setError("newPass", { message: "Password require length from 8 to 32 character, has letter and digits" });
      return;
    }
    if (newPass !== confirmPass) {
      form.setError("confirmPass", { message: "Confirm password does not match" }, { shouldFocus: true });
      return;
    }

    await changePass({
      variables: {
        oldPass,
        newPass,
      },
    });
  }

  return {
    onChangePass,
    form,
    loadingChangePass,
    loadingHasPass,
    userHasPassword: data?.hasPassWord,
  };
}
