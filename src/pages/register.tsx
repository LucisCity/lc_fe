import type { NextPage } from "next";
import RegisterPage from "../components/auth/register";
import AppLayout from "../components/layout";

const Home: NextPage = () => {
  return (
    <AppLayout isShowHeader={false}>
      <RegisterPage />
    </AppLayout>
  );
};

export default Home;
