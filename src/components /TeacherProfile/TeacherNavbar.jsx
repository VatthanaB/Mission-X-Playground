import React from "react";
import nzflag from "../../assets/NavBar/NZFlag.png";
import maoriflag from "../../assets/NavBar/MaoriFlag.png";
import levelUp from "../../assets/NavBar/LevelUpWorks-white.png";
import avatar from "../../assets/NavBar/Avatar-white.png";
import styles from "./TeacherNavbar.module.css";

export default function TeacherNavbar(props) {
  const teacherDB = props.teacherDB;
  const teacherImg = teacherDB[1].profile_pic;
  const teacherName = teacherDB[1].name;
  return (
    <div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <img className={styles.level_up_img} src={levelUp} alt="" />
        </li>
        <div className={styles.nav_link}>
          <li className={styles.li}>
            <a href="/">HOME</a>
          </li>
          <li className={styles.li}>
            <a href="/">FEATURES</a>
          </li>
          <li className={styles.li}>
            <a href="/Teacher-profile">TEACHERS</a>
          </li>
        </div>

        <li className={`${styles.li} `}>
          <div className={styles.right_div}>
            <div className={styles.flags}>
              <p>LANG</p>
              <img src={nzflag} alt="" />
              <img src={maoriflag} alt="" />
            </div>
            <div className={styles.register}>
              <img
                className={styles.avatar_img}
                src={teacherImg}
                alt="teacherPicture"
              />
              <p>{teacherName}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
