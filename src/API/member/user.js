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


export { listUser };
