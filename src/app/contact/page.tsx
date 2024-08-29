import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
 <Breadcrumb
  pageName="Contact Us"
  description="Get in touch with Rudra Overseas for all your study abroad needs. Our team is here to assist you with your queries and provide guidance on your journey to studying overseas."
/> 

      <Contact />
    </>
  );
};

export default ContactPage;
