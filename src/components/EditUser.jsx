import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const [empData, setEmpData] = useState();
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      username: "",
      position: "",
      office: "",
      dob: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.username === "") {
        errors.username = "Please enter the User name";
      }

      if (values.username.length <= 3 || values.username.length > 15) {
        errors.username = "User Name should be between 3 to 15";
      }

      if (values.position === "") {
        errors.position = "Please enter the Position";
      }

      if (values.office === "") {
        errors.office = "Please enter the Office";
      }

      if (values.dob === "") {
        errors.dob = "Please enter the DOB";
      }

      let enteredDate = new Date(values.dob);
      let currentDate = new Date();
      if (currentDate.getFullYear() - enteredDate.getFullYear() <= 18) {
        errors.dob = "Age should greater than 18";
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://6461c1c2491f9402f4aa0565.mockapi.io/employee/${params.id}`,
        values
      );
      alert("Data Posted");
    },
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const empList = await axios.get(
          `https://6461c1c2491f9402f4aa0565.mockapi.io/employee/${params.id}`
        );
        setEmpData(empList.data);
        delete empList.data.id;
        delete empList.data.createdAt;
        formik.setValues(empList.data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  });

  return (
    <div className="container-fluid">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label className=" form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.username}</span>
          </div>
          <div className="col-lg-4">
            <label className=" form-label">Position</label>
            <input
              type="text"
              className="form-control"
              name="position"
              value={formik.values.position}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.position}</span>
          </div>
          <div className="col-lg-4">
            <label className=" form-label">Office</label>
            <input
              type="text"
              className="form-control"
              name="office"
              value={formik.values.office}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.office}</span>
          </div>
          <div className="col-lg-4">
            <label className=" form-label">Age</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.dob}</span>
          </div>
          <div className="col-lg-4">
            <label className=" form-label">Start DaTe</label>
            <input
              type="date"
              className="form-control"
              name="startDate"
              value={formik.values.startDate}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.startDate}</span>
          </div>
          <div className="col-lg-4">
            <label className=" form-label">Salary</label>
            <input
              type="text"
              className="form-control"
              name="salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
            />
            <span>{formik.errors.salary}</span>
          </div>
          <div className="col-lg-12 mt-4">
            <input type="submit" className="btn btn-primary" value={"Submit"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
