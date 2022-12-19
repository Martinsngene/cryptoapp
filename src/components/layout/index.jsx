import React from "react";
import NavBar from "../navigation/navbar";
import SideBar from "../navigation/sidebar";
import styles from "./styles.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.gridSection}>
        <div className={styles.navbar}>
          <NavBar />
        </div>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
