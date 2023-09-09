import React, { useState } from "react";
import styles from "./Login.module.css";
import esc from "../../../assets/LoginSignup/esc.png";
import students from "../../../assets/LoginSignup/students.png";
import teachers from "../../../assets/LoginSignup/teachers.png";

export default function Login() {
  const [loginDisplay, setLoginDisplay] = useState(true);
  const [signupDisplay, setSignupDisplay] = useState(false);

  const crossHandler = () => {
    setLoginDisplay(false);
    setSignupDisplay(false);
  };
  const loginWindow = (
    <div className={styles.background}>
      <div className={styles.center}>
        <div className={styles.main_div}>
          <div></div>

          <div className={styles.st}>
            <img src={students} />
            <h1>Students</h1>
            <div className={styles.login_sign_div}>
              <h2>LOG IN</h2>
              <h2>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
          <div className={`${styles.st} ${styles.st_right}`}>
            <img
              onClick={crossHandler}
              className={styles.cross_image}
              src={esc}
            />
            <img src={teachers} />
            <h1>Teachers</h1>
            <div className={styles.login_sign_div}>
              <h2>LOG IN</h2>
              <h2>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {loginDisplay ? loginWindow : null}
      {signupDisplay}
    </div>
  );
}
