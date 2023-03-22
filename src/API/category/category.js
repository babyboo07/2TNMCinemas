import axios from "axios";
import { URL } from "AppConstants";

const config = {
  headers: {
    " Authorization": "Bearer " + localStorage.getItem("token"),
  },
};

export const ListCategory = async () => {
  try {
    return await axios.get(URL + `/admin/categories`, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const ListParentCategory = async () => {
  try {
    return await axios.get(URL + `/admin/categories/parent`, config).then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const SaveCategory = async (data) => {
  try {
    return await axios.post(URL + `/admin/category/save`, data, config).then((res) => {
      if (res.status === 200) {
        window.location.href = "/category";
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetCategoryById = async (cateId) => {
    try {
      return await axios.get(URL + `/admin/category/`+cateId, config).then((res) => {
        return res.data;
      });
    } catch (error) {
      console.log(error);
    }
  };
