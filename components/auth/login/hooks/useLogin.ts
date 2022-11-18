import Router from "next/router";
import { useState } from "react";

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

  return {
    login,
  };
}
