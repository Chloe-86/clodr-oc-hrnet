const initialState = {
    employees: [], // Liste d'employés vide initialement
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return { ...state, employees: [...state.employees, action.payload] };
      default:
        return state;
    }
  };
  
  export default reducer;
  