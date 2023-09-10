import React from "react";
import styles from "./HelpRequests.module.css";

export default function HelpRequests() {
  return (
    <div className={styles.main_div}>
      <div className={styles.top_text}>
        <h1>HELP REQUEST</h1>
        <div className={styles.top_text_right}>
          <h2> 🔙 REPLY</h2>
          <h2> ✔️ MARK AS DONE</h2>
        </div>
      </div>
      <div className={styles.vertical_menu}>
        <div className={styles.request_component}>
          <checkbox></checkbox>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
        <div className={styles.request_component}>
          <checkbox></checkbox>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
        <div className={styles.request_component}>
          <checkbox></checkbox>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>

        <div className={styles.request_component}>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
        <div className={styles.request_component}>
          <checkbox></checkbox>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
        <div className={styles.request_component}>
          <checkbox></checkbox>
          <img src="./images/students/AidenAndrews.png" alt="" />
          <h3>NAME</h3>
          <p>Need help with his/her project.</p>
          <div className={styles.date_time}>
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
