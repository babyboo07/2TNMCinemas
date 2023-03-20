import axios from "axios";
import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

const listDirector = () => {
  try {
    return axios.get(URL + `/admin/directors`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export { listDirector };
