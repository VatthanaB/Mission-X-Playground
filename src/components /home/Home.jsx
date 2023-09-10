import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WhatWeOffer from "./WhatWeOffer";
import TeachingKids from "./TeachingKids";
import InfoSlides from "./InfoSlides";
import CTA from "./CTA";
import Footer from "./Footer";

import esc from "../../assets/LoginSignup/esc.png";
import students from "../../assets/LoginSignup/students.png";
import teachers from "../../assets/LoginSignup/teachers.png";
import styles from "./Home.module.css";

export default function Home() {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [signupDisplay, setSignupDisplay] = useState(false);

  const crossHandler = () => {
    setLoginDisplay(false);
    setSignupDisplay(false);
  };
  const loginHandler = () => {
    setLoginDisplay(true);
    setSignupDisplay(false);
  };
  const signupHandler = () => {
    setLoginDisplay(false);
    setSignupDisplay(true);
  };
  const loginWindow = (
    <div className={styles.background}>
      <div className={styles.center}>
        <div className={styles.main_div}>
          <img
            onClick={crossHandler}
            className={styles.cross_image}
            src={esc}
            alt=""
          />

          <div className={styles.st}>
            <img src={students} alt="" />
            <h1>Students</h1>
            <div className={styles.login_sign_div}>
              <h2 className={styles.log_underline}>LOG IN</h2>
              <h2 onClick={signupHandler}>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
          <div className={`${styles.st} ${styles.st_right}`}>
            <img src={teachers} alt="" />
            <h1>Teachers</h1>
            <div className={styles.login_sign_div}>
              <h2 className={styles.log_underline}>LOG IN</h2>
              <h2 onClick={signupHandler}>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );

  const signupWindow = (
    <div className={styles.background}>
      <div className={styles.center}>
        <div className={`${styles.main_div} ${styles.main_div_signup}`}>
          <img
            onClick={crossHandler}
            className={styles.cross_image}
            src={esc}
            alt=""
          />
          <div className={`${styles.st} ${styles.st_signup}`}>
            <img src={students} alt="" />
            <h1>Students</h1>
            <div className={styles.login_sign_div}>
              <h2 onClick={loginHandler}>LOG IN</h2>
              <h2 className={styles.sign_underline}>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <input type="text" placeholder="Confirm Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
          <div className={`${styles.st} ${styles.st_right}`}>
            <img src={teachers} alt="" />
            <h1>Teachers</h1>
            <div className={styles.login_sign_div}>
              <h2 onClick={loginHandler}>LOG IN</h2>
              <h2 className={styles.sign_underline}>SIGN UP</h2>
            </div>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email Address"></input>
            <input type="text" placeholder="Password"></input>
            <input type="text" placeholder="Confirm Password"></input>
            <button className={styles.login_btn}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );

  // login component
  const Login = () => {
    return (
      <div>
        {loginDisplay ? loginWindow : null}
        {signupDisplay ? signupWindow : null}
      </div>
    );
  };
  return (
    <div>
      <Navbar loginHandler={loginHandler} signupHandler={signupHandler} />
      <Header signupHandler={signupHandler} />
      <WhatWeOffer />
      <TeachingKids />
      <InfoSlides />
      <CTA signupHandler={signupHandler} />
      <Footer />
      <Login />
    </div>
  );
}
