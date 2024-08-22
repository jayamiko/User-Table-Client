import React from "react";

function UserForm({ form, setForm }) {
  return (
    <form className="flex flex-col justify-center items-center space-x-2 space-y-2">
      <div className="w-full flex items-center">
        <label>Username: </label>
        <input
          type="text"
          value={form.username}
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value,
            })
          }
          placeholder="Enter your Username"
          className="p-2 border ml-2 rounded-md w-full"
        />
      </div>
      <div className="w-full flex items-center">
        <label>Password: </label>
        <input
          type="password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
          placeholder="Enter your Password"
          className="p-2 border ml-2 rounded-md w-full"
        />
      </div>
    </form>
  );
}

export default UserForm;
