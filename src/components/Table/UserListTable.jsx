import React from "react";
import moment from "moment";
import { fields } from "../../constants/constants";
import Button from "../Button/Button";
import CModal from "../Modal/CModal";
import { useState } from "react";
import UserForm from "../Form/UserForm";
import { deleteUser, editUser } from "../../api/user/userApi";
import Table from "react-bootstrap/Table";

function UserListTable({ data, setData, setIsLoading }) {
  const [showModal, setShowModal] = useState(false);
  const [confimModal, setConfirmModal] = useState(false);

  const initialValue = {
    username: "",
    password: "",
  };

  const [form, setForm] = useState(initialValue);

  function openModal() {
    setShowModal(true);
  }

  function handleEdit(id) {
    editUser(id, form, setData, setIsLoading);

    setForm(initialValue);
    setShowModal(false);
  }

  function handleDelete(id) {
    deleteUser(id, setData, setIsLoading);
    setConfirmModal(false);
  }

  return (
    <Table striped bordered hover variant="dark">
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
              <td>{moment(user.create_time).format("LLL")}</td>
              <td className="flex space-x-2 p-3 h-full ">
                <Button text="Edit" color="orange" onClick={openModal} />
                <CModal
                  title="Edit User"
                  show={showModal}
                  setShow={setShowModal}
                >
                  <UserForm form={form} setForm={setForm} />
                  <div className="w-full flex justify-center space-x-2">
                    <Button
                      text="Update"
                      color="green"
                      onClick={() => handleEdit(user.id)}
                    />
                    <Button
                      text="Cancel"
                      color="grey"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                </CModal>

                {/* Delete User */}
                <Button
                  text="Delete"
                  color="maroon"
                  onClick={() => setConfirmModal(true)}
                />
                <CModal
                  title="Are you sure?"
                  show={confimModal}
                  setShow={setConfirmModal}
                >
                  <div className="w-full flex justify-center space-x-2">
                    <Button
                      text="Delete User"
                      color="maroon"
                      onClick={() => handleDelete(user.id)}
                    />
                    <Button
                      text="Cancel"
                      color="grey"
                      onClick={() => setConfirmModal(false)}
                    />
                  </div>
                </CModal>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserListTable;
