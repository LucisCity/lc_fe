import { gql, useMutation } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { isStrongPass } from "../../../utils/password.util";
import { ErrorCode } from "../../../gql/graphql";

const RESET_PASSWORD_MUT = gql`
  mutation resetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;

export default function useResetPassword() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const token = router.query["token"] as string;

  const [reset, { loading }] = useMutation(RESET_PASSWORD_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Reset password successfully", { variant: "success" });
      Router.push("/login");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.TokenInvalid:
            enqueueSnackbar("Token không đúng, vui lòng thử lại hoặc liên hệ với chúng tôi để được hỗ trợ", {
              variant: "error",
            });
            break;
          case ErrorCode.InvalidNewPass:
            enqueueSnackbar("Mật khẩu mới không hợp lệ, yêu cầu độ dài 8-32, bao gồm cả số và chữ", {
              variant: "error",
            });
            break;
          case ErrorCode.BadRequest:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
            break;
          case ErrorCode.NewPassSameOldPass:
            enqueueSnackbar("Mật khẩu mới trùng với mật khẩu hiện tại", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  async function onReset(password: string, confirmPass: string) {
    if (!isStrongPass(password)) {
      form.setError(
        "password",
        { message: "Password require legnth from 8 to 32 character, has letter and degits" },
        { shouldFocus: true },
      );
      return;
    }
    if (confirmPass !== password) {
      form.setError("confirm_pass", { message: "Confirm password does not match" }, { shouldFocus: true });
      return;
    }
    if (!token) {
      console.log("Token not exist");
      return;
    }

    reset({
      variables: {
        token,
        password: password,
      },
    });
  }

  return {
    onReset,
    form,
    loading,
  };
}
