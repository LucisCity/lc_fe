import { gql, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { isStrongPass } from "../../../utils/password.util";

export const CHANGE_PASSWORD_MUT = gql`
  mutation changePassword($oldPass: String!, $newPass: String!) {
    changePassword(oldPass: $oldPass, newPass: $newPass)
  }
`;

export function useChangePassword() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const [changePass, { loading }] = useMutation(CHANGE_PASSWORD_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Success", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  async function onChangePass(oldPass: string, newPass: string, confirmPass: string) {
    console.log("on ChangePass reached");
    if (!isStrongPass(newPass)) {
      form.setError("password", { message: "Password require length from 8 to 32 character, has letter and digits" });
      return;
    }
    if (newPass !== confirmPass) {
      form.setError("confirm_pass", { message: "Confirm password does not match" }, { shouldFocus: true });
      return;
    }

    changePass({
      variables: {
        oldPass,
        newPass,
      },
    });
  }

  return {
    onChangePass,
    form,
    loading,
  };
}
