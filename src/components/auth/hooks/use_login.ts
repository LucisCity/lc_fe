import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useStores } from "../../../store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

const LOGIN_MUT = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        profile {
          user_id
          avatar
          display_name
        }
      }
    }
  }
`;

const LOGIN_GG_MUT = gql`
  mutation loginGoogle($token: String!) {
    loginGoogle(token: $token) {
      token
      user {
        id
        email
        profile {
          user_id
          avatar
          display_name
        }
      }
    }
  }
`;

const LOGIN_FB_MUT = gql`
  mutation loginFacebook($token: String!) {
    loginFacebook(token: $token) {
      token
      user {
        id
        email
        profile {
          user_id
          avatar
          display_name
        }
      }
    }
  }
`;

export default function useLogin() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const { userStore } = useStores();

  const [login, { loading }] = useMutation(LOGIN_MUT, {
    onCompleted: (res) => {
      userStore.saveLoginInfo(res.login.token, res.login.user);
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [loginGgMut, { loading: loadingGg }] = useMutation(LOGIN_GG_MUT, {
    onCompleted: (res) => {
      userStore.saveLoginInfo(res.loginGoogle.token, res.loginGoogle.user);
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [loginFbMut, { loading: loadingFb }] = useMutation(LOGIN_FB_MUT, {
    onCompleted: (res) => {
      userStore.saveLoginInfo(res.loginFacebook.token, res.loginFacebook.user);
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  useEffect(() => {
    if (userStore.isLogedIn) {
      Router.back();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onLogin(email: string, password: string) {
    login({
      variables: {
        email: email,
        password: password,
      },
    });
  }

  function fbLogin(res: any) {
    const token = res?.accessToken;
    if (!token) {
      return;
    }
    loginFbMut({
      variables: {
        token,
      },
    });
  }
  function ggLogin(res: any) {
    const token = res?.access_token ?? res?.code ?? res?.id_token;
    if (!token) {
      return;
    }
    loginGgMut({
      variables: {
        token,
      },
    });
  }

  return {
    onLogin,
    fbLogin,
    ggLogin,
    form,
    loading,
    loadingGg,
    loadingFb,
  };
}
