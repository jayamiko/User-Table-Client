import React from "react";
import { fields } from "../../constants/constants";
import Button from "../Button/Button";
import CModal from "../Modal/CModal";
import { useState } from "react";
import UserForm from "../Form/UserForm";
import { deleteUser, editUser } from "../../api/user/userApi";

function UserListTable({ data, setData, setIsLoading }) {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function openModal() {
    setShowModal(true);
  }

  function handleEdit(id) {
    editUser(id, form, setData, setIsLoading);

    setForm({
      username: "",
      password: "",
    });
    setShowModal(false);
  }

  function handleDelete(id) {
    deleteUser(id, setData, setIsLoading);
  }

  return (
    <table className="w-full border border-black">
      <thead className="border border-black bg-sky-200">
        <tr>
          {fields.map((field, i) => {
            return <th key={i}>{field}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.create_time}</td>
              <td className="flex items-center space-x-2 p-2">
                <Button text="Edit" color="orange" onClick={openModal} />
                <CModal
                  title="Register User"
                  show={showModal}
                  setShow={setShowModal}
                  onSubmit={() => handleEdit(user.id)}
                >
                  <UserForm form={form} setForm={setForm} />
                </CModal>
                <Button
                  text="Delete"
                  color="maroon"
                  onClick={() => handleDelete(user.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserListTable;
