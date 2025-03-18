import { Link } from "react-router-dom";
import List from "../components/EmployeList.jsx";
import Header from "../components/Header.jsx";

const currentEmployee = () => {
  return (
    <>
      <Header headerClass="header" info={"Current Employees"} />
      <div id="employee-div" className="container">
        <List />
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link to="/">Home</Link>
        </div>
      </div>
    </>
  );
};

export default currentEmployee;
