import type { NextPage } from "next";
import LoginPage from "../components/auth/login/login";
import AppLayout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <LoginPage />
    </AppLayout>
  );
};

export default Home;
