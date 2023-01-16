import { gql, useMutation } from "@apollo/client";
import Router, { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { ErrorCode } from "../../../gql/graphql";
import { useEffect } from "react";

const VERIFY_EMAIL_MUT = gql`
  mutation verifyEmail($token: String!) {
    verifyEmail(token: $token)
  }
`;

export default function useVerifyEmail() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const token = router.query["token"] as string;
  useEffect(() => {
    onHandleVerifyEmail(token);
  }, [token]);

  const [verifyEmail, { loading }] = useMutation(VERIFY_EMAIL_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Verify email successfully", { variant: "success" });
      Router.push("/login");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.TokenInvalid:
            enqueueSnackbar("Invalid token", {
              variant: "error",
            });
            break;
          default:
            enqueueSnackbar(err.message, { variant: "error" });
        }
      });
    },
  });

  async function onHandleVerifyEmail(token: string) {
    if (!token) {
      console.log("Token not exist");
      return;
    }

    verifyEmail({
      variables: {
        token,
      },
    });
  }

  return {
    loading,
  };
}
