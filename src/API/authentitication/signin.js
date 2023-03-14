import axios from "axios";
import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const handlelogin = (data) => {
  try {
    axios.post(URL + `/login`, data).then((res) => {
    //   localStorage.setItem("token", res.data.access_token);
    //   localStorage.setItem("user", JSON.stringify(res.data.users));
      console.log(res.data);
    //   window.location.href = "/";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
const handleRegister = (data) => {
  try {
    axios.post(URL + `/register`, data).then((res) => {
      console.log(res.data);
      window.location.href = "/login";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

const handleLogout = () => {
  try {
    axios.get(URL + `/logout`, config).then((res) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { handlelogin, handleRegister, handleLogout };
