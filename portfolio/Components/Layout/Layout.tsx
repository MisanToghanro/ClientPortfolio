import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wizzy Graphics | Creative Visual Designer</title>
        <meta
          name="description"
          content="Wizzy Graphics – Professional graphic design, branding, flyers, and visual storytelling."
        />
      </Head>

      <Header />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
