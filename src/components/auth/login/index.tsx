import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginForm from "./login_form";
//@ts-ignore

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_CLIENT_ID ?? ""}>
      <LoginForm />
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
