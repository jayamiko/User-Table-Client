import api, { setAuthToken } from "..";

export const login = async (form, dispatch, navigate, setErrorMessage) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(form);
    const response = await api.post("/api/login", body, config);
    const data = response.data;
    setAuthToken(data?.token);
    console.log(response);

    if (response?.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: data,
      });

      // to home page
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data.message);
  }
};

export const createUser = async (
  userData,
  dispatch,
  navigate,
  setErrorMessage
) => {
  try {
    const response = await api.post(`/api/register`, userData);
    console.log(response);
    const data = response.data;
    setAuthToken(data?.token);

    if (response?.status === 200) {
      dispatch({
        type: "REGISTER",
        payload: data,
      });

      // to home page
      navigate("/");
    }
  } catch (error) {
    console.error("error:", error);
    setErrorMessage(error.response.data.error.message);
  }
};
