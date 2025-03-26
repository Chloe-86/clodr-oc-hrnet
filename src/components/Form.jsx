import {useState } from "react";
import Modal from "@clodr/oc-cdr-react-modal"
import { states } from "../data/states.js";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DOMPurify from "dompurify";
import { useDispatch } from 'react-redux';

// Schéma de validation avec Yup
const validationSchema = Yup.object({
  name: Yup.string().trim().required("Firstname is required"),
  lastName: Yup.string().trim().required("Lastname is required"),
  dateOfBirth: Yup.date()
  .required("Date of birth is required"),
     // décommenter ci dessous pour mettre un age minimum de 18 ans 
    // .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)),"The employee must be at least 18 years old")
  startDate: Yup.date()
    .required("Start date is required"),
  street: Yup.string().trim().required("Address is required"),
  city: Yup.string().trim().required("The city is required"),
  stateCode: Yup.string().trim().required("State code is required"),
  zipCode: Yup.string()
    .matches(/^\d{5}$/, "Invalid postal code")
    .required("Postal code is required"),
  department: Yup.string().trim().required("The department is required"),
});

const FormEmployee = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    const newEmployee = { ...values, id: Date.now() };

    const sanitizedEmployee = {
      ...newEmployee,
      name: DOMPurify.sanitize(newEmployee.name),
      lastName: DOMPurify.sanitize(newEmployee.lastName),
      street: DOMPurify.sanitize(newEmployee.street),
      city: DOMPurify.sanitize(newEmployee.city),
      stateCode: DOMPurify.sanitize(newEmployee.stateCode),
      zipCode: DOMPurify.sanitize(newEmployee.zipCode),
    };
    dispatch({type: 'ADD_EMPLOYEE', payload: sanitizedEmployee})
    console.log(sanitizedEmployee)
    resetForm();
    setIsModalOpen(true); // Ouvre la modale après soumission
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          department: "",
          dateOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          stateCode: "",
          zipCode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <label  htmlFor="name">First Name</label>
            <Field autoComplete="name" type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />

            <label htmlFor="lastName">Last Name</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" className="error" />

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Field type="date" id="dateOfBirth" name="dateOfBirth" />
            <ErrorMessage name="dateOfBirth" component="div" className="error" />

            <label htmlFor="startDate">Start Date</label>
            <Field type="date" id="startDate" name="startDate" />
            <ErrorMessage name="startDate" component="div" className="error" />

            <fieldset>
              <legend>Address</legend>
              <label htmlFor="street">Street</label>
              <Field type="text" id="street" name="street" />
              <ErrorMessage name="street" component="div" className="error" />

              <label htmlFor="city">City</label>
              <Field type="text" id="city" name="city" />
              <ErrorMessage name="city" component="div" className="error" />

              <label htmlFor="stateCode">State</label>
              <Field as="select" id="stateCode" name="stateCode">
                <option value="">Select State</option>
                {states.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="stateCode" component="div" className="error" />

              <label htmlFor="zipCode">Zip Code</label>
              <Field type="text" id="zipCode" name="zipCode" />
              <ErrorMessage name="zipCode" component="div" className="error" />
            </fieldset>

            <label htmlFor="department">Department</label>
          <Field as="select" name="department" id="department">
            <option value="">--Please choose an option--</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </Field>
            <ErrorMessage name="department" component="div" className="error" />

            <button type="submit" disabled={!isValid}>Add</button>
          </Form>
        )}
      </Formik>

   
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} animationOpen="scaleIn"
        animationClose="rotationRight">
        <h2>Employee Created Successfully!</h2>
      </Modal>
    </>
  );
};

export default FormEmployee;
