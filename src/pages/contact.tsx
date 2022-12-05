import type { NextPage } from "next";
import DocHead from "../components/layout/doc_head";
import PageLayout from "../components/layout/PageLayout";
import { ContactPage } from "../components/contact";

const Contact: NextPage = () => {
  return (
    <>
      <DocHead />
      <PageLayout>
        <ContactPage />
      </PageLayout>
    </>
  );
};

export default Contact;
