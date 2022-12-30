import { gql, useMutation } from "@apollo/client";
import Router from "next/router";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import UserStore from "../../../store/user.store";
import { handleGraphqlErrors, setAuthToken } from "../../../utils/apolo.util";

const LOGIN_MUT = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        ref_code
        profile {
          user_id
          avatar
          display_name
        }
        wallet {
          balance
        }
        kyc_verification {
          status
        }
      }
    }
  }
`;

const LOGIN_GG_MUT = gql`
  mutation loginGoogle($token: String!, $refCode: String) {
    loginGoogle(token: $token, refCode: $refCode) {
      token
      user {
        id
        email
        ref_code
        profile {
          user_id
          avatar
          display_name
        }
        wallet {
          balance
        }
        kyc_verification {
          status
        }
      }
    }
  }
`;

const LOGIN_FB_MUT = gql`
  mutation loginFacebook($token: String!, $refCode: String) {
    loginFacebook(token: $token, refCode: $refCode) {
      token
      user {
        id
        email
        ref_code
        profile {
          user_id
          avatar
          display_name
        }
        wallet {
          balance
        }
        kyc_verification {
          status
        }
      }
    }
  }
`;

export default function useLogin() {
  const form = useForm();
  const { enqueueSnackbar } = useSnackbar();
  // const { userStore } = useStores();

  const [login, { loading }] = useMutation(LOGIN_MUT, {
    onCompleted: (res) => {
      UserStore.saveLoginInfo(res.login.token, res.login.user);
      if (typeof localStorage !== undefined) {
        localStorage.removeItem("referralCode");
      }
      setAuthToken(res.login.token);
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [loginGgMut, { loading: loadingGg }] = useMutation(LOGIN_GG_MUT, {
    onCompleted: (res) => {
      UserStore.saveLoginInfo(res.loginGoogle.token, res.loginGoogle.user);
      if (typeof localStorage !== undefined) {
        localStorage.removeItem("referralCode");
      }
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [loginFbMut, { loading: loadingFb }] = useMutation(LOGIN_FB_MUT, {
    onCompleted: (res) => {
      UserStore.saveLoginInfo(res.loginFacebook.token, res.loginFacebook.user);
      if (typeof localStorage !== undefined) {
        localStorage.removeItem("referralCode");
      }
      Router.push("/");
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  useEffect(() => {
    if (UserStore.isLoggedIn) {
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

  function fbLogin(res: any, refCode?: string) {
    const token = res?.accessToken;
    if (!token) {
      return;
    }
    loginFbMut({
      variables: {
        token,
        refCode,
      },
    });
  }
  function ggLogin(res: any, refCode?: string) {
    const token = res?.access_token ?? res?.code ?? res?.id_token;
    if (!token) {
      return;
    }
    loginGgMut({
      variables: {
        token,
        refCode,
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
