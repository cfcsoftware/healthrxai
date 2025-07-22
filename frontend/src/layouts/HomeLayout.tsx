"use client";


import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
