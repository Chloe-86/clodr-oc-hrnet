import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StoreContext } from "./StoreContext.jsx";

export const StoreProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]); // Liste des employés

  // Charger les employés depuis le localStorage au démarrage
  useEffect(() => {
    loadEmployees();
  }, []);

  //charger les employés si ils existent
  const loadEmployees = () => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees)); // Charger les données dans le state
    }
  };
  // Fonction pour mettre à jour les employés dans le localStorage
  const stockEmployees = (updatedEmployees) => {
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  // Fonction pour ajouter un employé
  const addEmployee = (employee) => {
    // Ajouter un employé au tableau des employés
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      // Mettre à jour le localStorage avec tous les employés
      stockEmployees(updatedEmployees);
      return updatedEmployees;
    });
  };
// Fonction pour supprimer un employé spécifique
const deleteEmployee = (employeeId) => {
  setEmployees((prevEmployees) => {
    const updatedEmployees = prevEmployees.filter(emp => emp.id !== employeeId);
    stockEmployees(updatedEmployees); // Mettre à jour le localStorage
    return updatedEmployees;
  });
};
  return (
    <StoreContext.Provider value={{ employees, addEmployee, deleteEmployee }}>
      {children} {/* Fournir les données aux enfants */}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node, 
};

export default StoreProvider;
