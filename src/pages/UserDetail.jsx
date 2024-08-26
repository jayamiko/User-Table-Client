import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../components/ButtonBack";
import Table from "react-bootstrap/esm/Table";

function UserDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        setIsLoading(false);
        setDetail(response.data);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-5">
      <ButtonBack />

      {isLoading ? (
        <div className="w-full flex justify-center">Loading...</div>
      ) : (
        <Table striped bordered hover variant="dark" className="mt-2">
          <thead className="border border-black bg-sky-200">
            <tr>
              {["userid", "title", "body"].map((field, i) => {
                return <th key={i}>{field}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.userId}</td>
              <td>{detail.title}</td>
              <td>{detail.body}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default UserDetail;
