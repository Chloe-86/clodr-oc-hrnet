import Form from "../components/Form.jsx";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

const createEmployee = () => {
  return (
    <>
      <Header headerClass="header" info={"Hrnet"} />
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
      </div>
    </>
  );
};

export default createEmployee;
