"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
