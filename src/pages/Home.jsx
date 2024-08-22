import { useContext, useState } from "react";
import { useEffect } from "react";
import { getAllUsers } from "../api/user/userApi";
import Button from "../components/Button/Button";
import UserListTable from "../components/Table/UserListTable";
import { AuthContext } from "../context/authContextProvider";
import { useNavigate } from "react-router-dom";
import { COLOR, STATE } from "../constants/constants";

function Home() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers, setIsLoading);
  }, []);

  const logoutHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: STATE.Logout,
      isLogin: false,
      user: {
        username: "",
        password: "",
      },
    });
    navigate("/login");
  };

  return (
    <div className="container mx-auto h-screen sm:p-5 lg:p-10">
      <div className="w-full flex justify-end mb-2">
        <Button text="Logout" color={COLOR.Rose} onClick={logoutHandle} />
      </div>
      {/* USER TABLE DATA */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <UserListTable
          data={users}
          setData={setUsers}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default Home;
