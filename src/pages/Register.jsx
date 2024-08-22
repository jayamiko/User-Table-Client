import React from "react";
import RegisterForm from "../components/Form/RegisterForm";

function Register() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="font-bold uppercase my-2">Register Form</h1>
      <hr />
      <br />
      <RegisterForm />
    </div>
  );
}

export default Register;
