import axios from "axios";
import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const listUser = () => {
  try {
    return axios.get(URL + `/admin/users`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (data) => {
  try {
    return await axios.post(URL + `/register`, data).then((res) => {
      window.location.href = "/member";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const editUser = async (data) => {
  try {
    return await axios.post(URL + `/admin/user/update`, data).then((res) => {
      window.location.href = "/member";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { listUser, createUser, editUser };
