import { useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { StoreContext } from "../context/StoreContext.jsx";
import DOMPurify from 'dompurify';

const List = () => {
  const { employees } = useContext(StoreContext);
  const users = employees;
  const [searchTerm, setSearchTerm] = useState("");


  const sanitizeSearchTerm = (term) => {
    return DOMPurify.sanitize(term);
  };

  sanitizeSearchTerm(searchTerm);

  const columns = [
    { field: "name", headerName: "Name", headerClassName: 'super-app-theme--header', width: 150 },
    { field: "lastName", headerName: "Last Name", headerClassName: 'super-app-theme--header', width: 150 },
    { field: "department", headerName: "Department", headerClassName: 'super-app-theme--header', width: 150 },
    { field: "dateOfBirth", headerName: "Date of Birth", headerClassName: 'super-app-theme--header', width: 150 },
    { field: "street", headerName: "Street",  headerClassName: 'super-app-theme--header',width: 150 },
    { field: "city", headerName: "City",  headerClassName: 'super-app-theme--header',width: 150 },
    { field: "stateCode", headerName: "State",headerClassName: 'super-app-theme--header', width: 100 },
    { field: "zipCode", headerName: "Zip Code",headerClassName: 'super-app-theme--header', width: 100 },
  ];

  const filteredEmployees = users.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.dateOfBirth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.stateCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.street.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{ height: "400px", width: "100%"}}>
      <div style={{ display: "flex", marginBottom: "10px"}}>
        <label style={{ margin:0}} htmlFor="search">Search:</label>
        <input style={{height: "20px", marginLeft: "10px"}} type="text" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
     
      <DataGrid
        rows={filteredEmployees}
        columns={columns}
        initialState={{
          ...filteredEmployees.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};

export default List;
