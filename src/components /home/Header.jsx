import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.hero_text}>
        <h1 className={styles.title}>
          Pepare young minds for a better <span>future.</span>
        </h1>
        <h5>
          Let us help you advance students in digital Technologies and other
          learning areas with our project-based learning programme.
        </h5>
        <div className={styles.links}>
          <button className={styles.btn_learn}> LEARN MORE</button>
          <div className={styles.sign_up_btn_div}>
            <button className={styles.btn_sign}> SIGN UP</button>
            <p>
              *Basic subscription includes the first 15 projects free of charge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
