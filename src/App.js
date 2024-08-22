import { useState } from "react";
import Button from "./components/Button/Button";
import UserListTable from "./components/Table/UserListTable";
import CModal from "./components/Modal/CModal";
import UserForm from "./components/Form/UserForm";
import { createUser, getAllUsers } from "./api/user/userApi";
import { useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(setUsers, setIsLoading);
  }, []);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function openModal() {
    setShowModal(true);
  }

  const register = async () => {
    createUser(form, setUsers, setIsLoading);
    setForm({
      username: "",
      password: "",
    });
    setShowModal(false);
  };

  return (
    <div className="container mx-auto h-screen sm:p-5 lg:p-10">
      <div className="w-full flex justify-end mb-2">
        <Button text="Create User" color="blue" onClick={openModal} />
        <CModal
          title="Register User"
          show={showModal}
          setShow={setShowModal}
          onSubmit={register}
        >
          <UserForm form={form} setForm={setForm} />
        </CModal>
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

export default App;
