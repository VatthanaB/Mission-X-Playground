import React from "react";
import styles from "./SideBarIcons.module.css";
import helpRequests from "../../assets/TeacherDashboard/helpRequests.png";
import helpRequestsSelected from "../../assets/TeacherDashboard/helpRequestsSelected.png";
import progressTracker from "../../assets/TeacherDashboard/progressTracker.png";
import progressTrackerSelected from "../../assets/TeacherDashboard/progressTrackerSelected.png";
import projectLibrary from "../../assets/TeacherDashboard/projectLibrary.png";
import projectLibrarySelected from "../../assets/TeacherDashboard/projectLibrarySelected.png";
import projectSubmissions from "../../assets/TeacherDashboard/projectSubmissions.png";
import projectSubmissionsSelected from "../../assets/TeacherDashboard/projectSubmissionsSelected.png";
import studentProfiles from "../../assets/TeacherDashboard/studentProfiles.png";
import studentProfilesSelected from "../../assets/TeacherDashboard/studentProfilesSelected.png";

import arrowLeft from "../../assets/arrowLeft.png";
import logout from "../../assets/logout.png";
import profile from "../../assets/profile.png";
import settings from "../../assets/settings.png";

export default function SideBarIcons(props) {
  const arrowIsClickHandler = props.arrowClickHandler;
  const setButtonIsClicked = props.setButtonIsClicked;
  const buttonIsClicked = props.buttonIsClicked;
  const teacherDB = [
    {
      teacher_id: 0,
      name: "Teacher1",
      email: "teacher@gmail.com",
      password: "teacher123",
      school: "Auckland University",
      profile_pic: "./images/teacher1.jpg",
      date_of_birth: "1990-01-01",
      contact_number: "0211234567",
      course: "beginner",
    },
    {
      teacher_id: 1,
      name: "Jasmina Salvador",
      email: "jsalvador@homai.edu.com",
      password: "jasmina123",
      school: "Homai School",
      profile_pic: "./images/teachers/JasminaSalvador.png",
      date_of_birth: "1986-06-25",
      contact_number: "0277522800",
      course: "Beginner",
    },
  ];
  return (
    <div className={styles.left_menu}>
      <img
        className={styles.profile_picture_left_menu}
        src={teacherDB[1].profile_pic}
        alt="teacherimg"
      />

      <button
        onClick={() => {
          setButtonIsClicked("PROGRESS TRACKER");
        }}
        className={
          buttonIsClicked === "PROGRESS TRACKER" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "PROGRESS TRACKER"
              ? progressTrackerSelected
              : progressTracker
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("STUDENT PROFILE");
        }}
        className={
          buttonIsClicked === "STUDENT PROFILE" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "STUDENT PROFILE"
              ? studentProfilesSelected
              : studentProfiles
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("HELP REQUESTS");
        }}
        className={
          buttonIsClicked === "HELP REQUESTS" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "HELP REQUESTS"
              ? helpRequestsSelected
              : helpRequests
          }
          alt=""
        />
      </button>
      <button
        onClick={() => {
          setButtonIsClicked("PROJECT SUBMISSIONS");
        }}
        className={
          buttonIsClicked === "PROJECT SUBMISSIONS"
            ? styles.button_is_clicked
            : ""
        }
      >
        <img
          src={
            buttonIsClicked === "PROJECT SUBMISSIONS"
              ? projectSubmissionsSelected
              : projectSubmissions
          }
          alt=""
        />
      </button>

      <button
        onClick={() => {
          setButtonIsClicked("PROJECT LIBRARY");
        }}
        className={
          buttonIsClicked === "PROJECT LIBRARY" ? styles.button_is_clicked : ""
        }
      >
        <img
          src={
            buttonIsClicked === "PROJECT LIBRARY"
              ? projectLibrarySelected
              : projectLibrary
          }
          alt=""
        />
      </button>
      <div className={styles.move_arrow}>
        <div onClick={arrowIsClickHandler} className={styles.arrow_img_div}>
          <img src={arrowLeft} alt="" />
        </div>
      </div>
      <div className={styles.bottom_icons_div}>
        <div
          onClick={() => {
            window.location.href = "/Teacher-profile";
          }}
          className={styles.icons}
        >
          <img src={profile} alt="" />
        </div>
        <div className={styles.icons}>
          <img src={settings} alt="" />
        </div>
        <div
          onClick={() => {
            window.location.href = "/";
          }}
          className={styles.icons}
        >
          <img src={logout} alt="" />
        </div>
      </div>
    </div>
  );
}
