import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useModal } from "../../../hooks/use_modal";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { isStrongPass } from "../../../utils/password.util";
import { ErrorCode } from "../../../gql/graphql";

const REGISTER_MUT = gql`
  mutation register($email: String!, $password: String!, $ref_code: String) {
    register(email: $email, password: $password, ref_code: $ref_code)
  }
`;

const ERROR_MESSAGES: { [key: string]: string } = {
  ACCOUNT_EXIST: "Account exist",
};

export default function useRegister() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const confirmModal = useModal();

  const [register, { loading }] = useMutation(REGISTER_MUT, {
    onCompleted: () => {
      confirmModal.onOpen();
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  async function onRegister(email: string, password: string, confirmPass: string, refCode?: string) {
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

    register({
      variables: {
        email: email,
        password: password,
        // eslint-disable-next-line camelcase
        ref_code: refCode,
      },
    });
  }

  const onClose = () => {
    confirmModal.onClose();
    Router.push("/login");
  };
  return {
    onRegister,
    form,
    loading,
    confirmModal,
    onClose,
  };
}
