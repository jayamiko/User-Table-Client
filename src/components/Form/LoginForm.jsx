import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../context/authContextProvider";
import { login } from "../../api/auth/auth";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { COLOR } from "../../constants/constants";
import CaptchaText from "../Captcha/CaptchaText";

function LoginForm() {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [captchaStatus, setCaptchaStatus] = useState(null);

  const initialForm = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleCaptchaStatus = (status) => {
    setCaptchaStatus(status);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    login(form, dispatch, navigate, setErrorMessage);

    setForm(initialForm);
  };

  const { username, password } = form;

  function shouldEnableButton() {
    return username && password && captchaStatus;
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
          required
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
          required
        />
      </div>
      <div className="w-full flex items-center">
        <CaptchaText onCaptchaStatus={handleCaptchaStatus} />
      </div>

      <div className="w-full">
        {captchaStatus && <Alert variant="success">Captcha is correct!</Alert>}
        {captchaStatus === false && (
          <Alert variant="danger">Captcha is incorrect!</Alert>
        )}
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
          Don't have an account?
          <Link to="/register" className="text-sky-500">
            {" "}
            Sign Up
          </Link>
        </p>
        <Button
          text="Submit"
          color={COLOR.SkyBlue}
          onClick={handleLogin}
          disabled={!shouldEnableButton()}
        >
          SUBMIT
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
