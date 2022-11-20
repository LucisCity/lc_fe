import type { NextPage } from "next";
import LoginPage from "../components/auth/login";
import AppLayout from "../components/layout";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <LoginPage />
    </AppLayout>
  );
};

export default Home;
