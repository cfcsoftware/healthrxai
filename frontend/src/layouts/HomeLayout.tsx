"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
