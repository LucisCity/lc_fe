import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { ErrorCode } from "../../../gql/graphql";

const FORGOT_MUT = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export default function useForgot() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const [forgot, { loading }] = useMutation(FORGOT_MUT, {
    onCompleted: () => {
      // Router.push("/login");
      enqueueSnackbar("Request successfully! Please check your email to get reset password link", {
        variant: "success",
      });
      form.reset();
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.UserNotFound:
            enqueueSnackbar("Không tìm thấy user", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  async function onForgot(email: string) {
    forgot({
      variables: {
        email: email,
      },
    });
  }

  return {
    onForgot,
    form,
    loading,
  };
}
