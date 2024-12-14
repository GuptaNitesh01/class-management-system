import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Database Management System</h1>
          <nav>
            <ul>
              <li><Link to="/admission">Admission</Link></li>
              <li><Link to="/attendance">Attendance</Link></li>
              <li><Link to="/staffs">Staffs</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/courses">Courses</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/admission" element={<Admission />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/staffs" element={<Staffs />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};


const Admission = () => (
  <div>
    <h2>Admission</h2>
    <p>Manage student admissions here.</p>
  </div>
);

const Attendance = () => (
  <div>
    <h2>Attendance</h2>
    <p>Track and update attendance records here.</p>
  </div>
);

const Staffs = () => (
  <div>
    <h2>Staffs</h2>
    <p>View and manage staff details here.</p>
  </div>
);

const Students = () => (
  <div>
    <h2>Students</h2>
    <p>Manage student records here.</p>
  </div>
);

const Courses = () => (
  <div>
    <h2>Courses</h2>
    <p>View and manage course details here.</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
