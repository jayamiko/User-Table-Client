import { createContext, useReducer } from "react";

const initialValue = {
  isLoading: true,
  isLogin: false,
  user: {
    username: "",
    password: "",
    create_time: "",
  },
};

export const AuthContext = createContext();

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "AUTH_SUCCESS":
    case "LOGIN":
      localStorage.setItem("token", payload.token);
      return {
        isLoading: false,
        isLogin: true,
        user: payload,
      };
    case "REGISTER":
      localStorage.setItem("token", payload.token);
      return {
        isLoading: false,
        isLogin: true,
        user: payload,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return initialValue;
    default:
      throw new Error("type doesn't match cases");
  }
}

export const AuthContextProvider = ({ children }) => {
  const [stateAuth, dispatch] = useReducer(reducer, initialValue);

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
