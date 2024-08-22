import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { createUser } from "../../api/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContextProvider";
import { Alert } from "react-bootstrap";
import { COLOR } from "../../constants/constants";

function RegisterForm() {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const initialValue = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialValue);

  const [errorMessage, setErrorMessage] = useState("");

  const register = async (e) => {
    e.preventDefault();
    createUser(form, dispatch, navigate, setErrorMessage);
    setForm(initialValue);
  };

  const { username, password } = form;

  function shouldEnableButton(username, password) {
    return username && password;
  }

  return (
    <form className="flex flex-col justify-center items-center space-x-2 space-y-2">
      <div className="w-full flex items-center">
        <label>Username: </label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
          placeholder="Enter your Username"
          className="p-2 border ml-2 rounded-md w-full"
        />
      </div>
      <div className="w-full flex items-center">
        <label>Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          placeholder="Enter your Password"
          className="p-2 border ml-2 rounded-md w-full"
        />
      </div>

      {errorMessage && (
        <div className="w-full">
          <Alert variant="danger" className="capitalize">
            {errorMessage}
          </Alert>
        </div>
      )}

      <hr />
      <div className="w-full flex justify-between">
        <p>
          Already have an account?
          <Link to="/login" className="text-emerald-500">
            {" "}
            Sign In
          </Link>
        </p>
        <Button
          text="Submit"
          color={COLOR.SkyBlue}
          onClick={register}
          disabled={!shouldEnableButton(username, password)}
        >
          SUBMIT
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
