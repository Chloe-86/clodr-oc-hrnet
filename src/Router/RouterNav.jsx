import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateEmployee from "../Pages/createEmployee.jsx";
import CurrentEmployee from "../Pages/currentEmployee.jsx";

const RouterNav = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<CurrentEmployee />} />
      </Routes>
    </Router>
  );
};

export default RouterNav;