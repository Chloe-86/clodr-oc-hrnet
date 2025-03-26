import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

const List = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const employeesList = useSelector((state) => state.employees);

  const sanitizeSearchTerm = (term) => {
    return DOMPurify.sanitize(term);
  };

  const sanitizedSearchTerm = sanitizeSearchTerm(searchTerm);

  const columns = [
    { field: "name", headerName: "Name", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "lastName", headerName: "Last Name", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "department", headerName: "Department", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "dateOfBirth", headerName: "Date of Birth", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "street", headerName: "Street", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "city", headerName: "City", headerClassName: "super-app-theme--header", width: 150, sortable: true },
    { field: "stateCode", headerName: "State", headerClassName: "super-app-theme--header", width: 100 ,sortable: true },
    { field: "zipCode", headerName: "Zip Code", headerClassName: "super-app-theme--header", width: 100, sortable: true },
  ];

  const filteredEmployees = employeesList.filter((employee) => {
    const lowerSearchTerm = sanitizedSearchTerm.toLowerCase();
    return (
      employee.name.toLowerCase().includes(lowerSearchTerm) ||
      employee.lastName.toLowerCase().includes(lowerSearchTerm) ||
      employee.department.toLowerCase().includes(lowerSearchTerm) ||
      employee.dateOfBirth.toLowerCase().includes(lowerSearchTerm) ||
      employee.city.toLowerCase().includes(lowerSearchTerm) ||
      employee.stateCode.toLowerCase().includes(lowerSearchTerm) ||
      employee.zipCode.toLowerCase().includes(lowerSearchTerm) ||
      employee.street.toLowerCase().includes(lowerSearchTerm)
    );
  });

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <label style={{ margin: 0 }} htmlFor="search">
          Search:
        </label>
        <input
          id="search"
          name="search"
          style={{ height: "20px", marginLeft: "10px" }}
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <DataGrid
        rows={filteredEmployees}
        columns={columns}
        pageSize={10}
        pagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default List;
