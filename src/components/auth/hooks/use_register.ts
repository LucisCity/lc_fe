import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import PasswordValidator = require("password-validator");

// --- Create password validator schema
const schema = new PasswordValidator();
schema.is().min(8).is().max(32).has().letters().has().digits();

const REGISTER_MUT = gql`
  mutation register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export default function useRegister() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const [register, { loading }] = useMutation(REGISTER_MUT, {
    onCompleted: () => {
      Router.push("/login");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  async function onRegister(email: string, password: string, confirmPass: string) {
    if (!schema.validate(password)) {
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

  return {
    onRegister,
    form,
    loading,
  };
}
