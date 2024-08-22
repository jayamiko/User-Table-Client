import api from "..";

export const getAllUsers = async (setUsers, setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await api.get(`/api/users`);
    const data = response.data.data;
    setUsers(data);
  } catch (error) {
    console.error("error:", error);
  } finally {
    setIsLoading(false);
  }
};

export const editUser = async (userId, form, setUsers, setIsLoading) => {
  setIsLoading(true);
  try {
    await api.put(`/api/updateUser/${userId}`, form);
    getAllUsers(setUsers, setIsLoading);
  } catch (error) {
    console.error("error:", error);
  } finally {
    setIsLoading(false);
  }
};

export const deleteUser = async (userId, setUsers, setIsLoading) => {
  setIsLoading(true);
  try {
    await api.delete(`/api/deleteUser/${userId}`);
    getAllUsers(setUsers, setIsLoading);
  } catch (error) {
    console.error("error:", error);
  } finally {
    setIsLoading(false);
  }
};
