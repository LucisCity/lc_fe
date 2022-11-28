import DocHead from "./doc_head";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: any;
  isShowHeader?: boolean;
};
function AppLayout(props: Props) {
  const { children, isShowHeader } = props;

  return (
    <>
      {/* DocHead should in each page */}
      <DocHead />
      {isShowHeader === false ? null : <Header />}
      {children}
      <Footer />
    </>
  );
}

export default AppLayout;
