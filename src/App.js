import "./App.css";
import Home from "./components /Home/Home";
import TeacherProfile from "./components /TeacherProfile/TeacherProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeacherDashboard from "./components /TeacherDashboard/TeacherDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Teacher-profile" element={<TeacherProfile />} />
        <Route path="/Teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
