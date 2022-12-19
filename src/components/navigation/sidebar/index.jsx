import React from "react";
import { links } from "../../../constants";
import styles from "./styles.module.css";

function SideBar() {
  const linkStyles = styles.link + " " + styles.linkActive;
  return (
    <div className={styles.container}>
      <div className={styles.routeContainer}>
        {links.map((route, index) => {
          return (
            <a className={linkStyles} href={route.route} key={index}>
              <span className={styles.linkIcon}>{route.icon}</span>
              <span className={styles.linkName}>{route.routeName}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
