import Router from "next/router";
import { useState } from "react";

export enum SocialTye {
  facebook = "facebook",
  google = "google",
}

export default function useLogin() {
  const login = async function (email: string, password: string) {
    try {
      Router.push("/");
    } catch (err: any) {
      // toast({
      //   status: "error",
      //   title: err.message ?? "Request failed",
      //   isClosable: true,
      // });
    } finally {
      // setSubmitting(false);
    }
  };

  function fbLogin(res: any) {
    socialLogin(res, SocialTye.facebook);
  }
  function ggLogin(res: any) {
    socialLogin(res, SocialTye.google);
  }

  async function socialLogin(res: any, type: SocialTye) {
    try {
      const input: any = {};
      // let input: any = {};
      if (type == SocialTye.facebook) {
        // eslint-disable-next-line camelcase
        input.access_token = res?.accessToken;
      } else if (type == SocialTye.google) {
        // eslint-disable-next-line camelcase
        input.web_access_token = res?.access_token ?? res?.code ?? res?.id_token;
      }
      if (Object.keys(input).length == 0) {
        return;
      }
      Router.push("/");
    } catch (err: any) {
      // toast({
      //   status: "error",
      //   title: err.message ?? "Request failed",
      //   isClosable: true,
      // });
    } finally {
      // setSubmitting(false);
    }
  }

  return {
    login,
    fbLogin,
    ggLogin,
  };
}
