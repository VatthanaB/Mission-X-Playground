import "./App.css";
import Home from "./components /Home/Home";
import TeacherProfile from "./components /TeacherProfile/TeacherProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Teacher-profile" element={<TeacherProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
