import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import React from "react";
import styles from "./main-container.module.css"

export default function MainContainer ({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer/>
    </>
  );
}