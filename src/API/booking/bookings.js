import axios from "axios";

import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

export const listMovieBooking = () => {
  try {
    return axios.get(URL + `/admin/booking_depot`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
