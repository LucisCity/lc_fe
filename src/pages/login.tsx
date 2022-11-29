import type { NextPage } from "next";
import LoginPage from "../components/auth/login";
import AppLayout from "../components/layout";

const Login: NextPage = () => {
  return (
    <AppLayout isShowHeader={false} isShowFooter={false}>
      <LoginPage />
    </AppLayout>
  );
};

export default Login;
