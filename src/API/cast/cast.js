import axios from "axios";
import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const listCast = () => {
  try {
    return axios.get(URL + `/admin/cast`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { listCast };