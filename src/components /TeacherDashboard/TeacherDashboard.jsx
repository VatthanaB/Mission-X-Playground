import React, { useState } from "react";
import styles from "./TeacherDashboard.module.css";
import SideBarDefault from "./SideBarDefault";
import TeacherDashboardNavbar from "./TeacherDashboardNavbar";

import HelpRequests from "./HelpRequests";

import SideBarIcons from "./SideBarIcons";

export default function TeacherDashboard() {
  const [arrowIsClicked, setArrowIsClicked] = useState(true);
  const [buttonIsClicked, setButtonIsClicked] = useState(true);
  const [componentToDisplay, setComponentToDisplay] = useState();
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
  const clickHandler = (e) => {
    if (e.target.innerText === "PROGRESS TRACKER") {
      setButtonIsClicked("PROGRESS TRACKER");
    } else if (e.target.innerText === "STUDENT PROFILE") {
      setButtonIsClicked("STUDENT PROFILE");
    } else if (e.target.innerText === "HELP REQUESTS") {
      setButtonIsClicked("HELP REQUESTS");
      setComponentToDisplay(<HelpRequests />);
    } else if (e.target.innerText === "PROJECT SUBMISSIONS") {
      setButtonIsClicked("PROJECT SUBMISSIONS");
    } else if (e.target.innerText === "PROJECT LIBRARY") {
      setButtonIsClicked("PROJECT LIBRARY");
    }
  };
  const arrowClickHandler = () => {
    setArrowIsClicked(!arrowIsClicked);
  };
  return (
    <div>
      <div>
        <TeacherDashboardNavbar teacherDB={teacherDB} />
        <div className={styles.main_div}>
          {arrowIsClicked ? (
            <SideBarDefault
              buttonIsClicked={buttonIsClicked}
              clickHandler={clickHandler}
              arrowClickHandler={arrowClickHandler}
            />
          ) : (
            <SideBarIcons
              buttonIsClicked={buttonIsClicked}
              setButtonIsClicked={setButtonIsClicked}
              arrowClickHandler={arrowClickHandler}
            />
          )}

          <div className={styles.component_display_background}>
            <div className={styles.component_div}>{componentToDisplay}</div>
          </div>
        </div>
      </div>
      <div className={styles.dashboard_footer}>@2023 LevelUp Works</div>
    </div>
  );
}
