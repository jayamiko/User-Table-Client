import { createContext, useReducer } from "react";
import { STATE } from "../constants/constants";

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
    case STATE.AuthSuccess:
    case STATE.Login:
      localStorage.setItem("token", payload.token);
      return {
        isLoading: false,
        isLogin: true,
        user: payload,
      };
    case STATE.Register:
      localStorage.setItem("token", payload.token);
      return {
        isLoading: false,
        isLogin: true,
        user: payload,
      };
    case STATE.AuthError:
    case STATE.Logout:
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
