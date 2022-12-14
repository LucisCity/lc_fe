import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useModal } from "../../../hooks/use_modal";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { isStrongPass } from "../../../utils/password.util";

const REGISTER_MUT = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

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
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  async function onRegister(email: string, password: string, confirmPass: string) {
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
