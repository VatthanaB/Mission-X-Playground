import React from "react";
import TeacherNavbar from "./TeacherNavbar";
import styles from "./TeacherProfile.module.css";
import Footer from "../Home/Footer";

export default function TeacherProfile() {
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
    <div>
      <TeacherNavbar teacherDB={teacherDB} />
      <div className={styles.background}>
        <div className={styles.main_div}>
          <div className={styles.teacher_picture_div}>
            <img
              className={styles.teacher_picture}
              src={teacherDB[1].profile_pic}
              alt=""
            />
            <button>EDIT PROFILE</button>
            <button>CHANGE PHOTO</button>
            <button>SETTINGS</button>
          </div>
          <div className={styles.teacher_info_div}>
            <h1>{teacherDB[1].name}</h1>
            <div className={styles.list_div}>
              <ul className={styles.list_static}>
                <li>School</li>
                <li>Course Purchased</li>
                <li>Date of Birth</li>
                <li>Contact No</li>
                <li>Email</li>
              </ul>
              <ul className={styles.list_dynamic}>
                <li>{teacherDB[1].school}</li>
                <li>{teacherDB[1].course}</li>
                <li>{teacherDB[1].date_of_birth}</li>
                <li>{teacherDB[1].contact_number}</li>
                <li>{teacherDB[1].email}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.button_div}>
          <button className={styles.back_button_project}>
            {" "}
            BACK TO PROJECTS
          </button>
          <button className={styles.back_button_dash}>BACK TO DASHBOARD</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
