import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function UserListTable({ data }) {
  const navigate = useNavigate();
  return (
    <Table striped bordered hover variant="dark" className="mt-2">
      <thead className="border border-black bg-sky-200">
        <tr>
          {["userid", "title"].map((field, i) => {
            return <th key={i}>{field}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((user, i) => {
          return (
            <tr
              onClick={() => navigate(`/user/${user.id}`)}
              className="cursor-pointer"
            >
              <td>{user.userId}</td>
              <td>{user.title}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default UserListTable;
