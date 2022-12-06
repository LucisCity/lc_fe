import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

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
      enqueueSnackbar("Request successfully! Please check your email", { variant: "success" });
      form.reset();
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
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
