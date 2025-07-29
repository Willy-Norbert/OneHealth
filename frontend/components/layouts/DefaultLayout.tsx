import React from "react";
import Navbar  from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import ScrollToTop from "@/components/common/scroll-to-top";

interface DefaultLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
        
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default DefaultLayout;
