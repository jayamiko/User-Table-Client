import React, { useContext, useEffect } from "react";
import LoginForm from "../components/Form/LoginForm";
import { AuthContext } from "../context/authContextProvider";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate;

  const { dispatch } = useContext(AuthContext);

  const checkUser = async () => {
    try {
      const response = await api.get("/api/checkAuth");

      if (response.status !== 200) {
        dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      if (response.status === 200) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload,
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-bold uppercase my-2">Login Form</h1>
      <hr />
      <br />
      <LoginForm />
    </div>
  );
}

export default Login;
