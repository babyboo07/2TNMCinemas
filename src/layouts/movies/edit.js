import { Card, FormHelperText } from "@mui/material";
import { listCast } from "API/cast/cast";
import { ListCategory } from "API/category/category";
import { listDirector } from "API/director/director";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { CustomListCast } from "layouts/utils/GetData";
import { CustomListCategory } from "layouts/utils/GetData";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const EditMovie = () => {
  const [lstCategory, setListCategory] = useState([]);
  const [lstDirector, setLstDirector] = useState([]);
  const [lstCast, setLstCast] = useState([]);
  const [videoID, setVideoID] = useState();
  const [listCate, setListCate] = useState([]);
  const [listcast, setListCast] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.trailers = videoID;
    data.cast = listcast;
    data.movieCate = listCate;
    console.log(videoID);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await ListCategory();
    const customList = CustomListCategory(list);
    setListCategory(customList);

    const listDir = await listDirector();
    setLstDirector(listDir);

    const castList = await listCast();
    const customlistCast = CustomListCast(castList);
    setLstCast(customlistCast);
  };

  const onChangeCategory = (selectedOptions) => {
    setListCate(selectedOptions);
    console.log(selectedOptions);
  };

  const onChangeCast = (selectedOptions) => {
    setListCast(selectedOptions);
    console.log(selectedOptions);
  };
  const handleChange = (e) => {
    setVideoID(e.target.value.substring(e.target.value.search("=") + 1, e.target.value.length));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox onSubmit={handleSubmit(onSubmit)} component="form" role="form" p={2}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Title
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      id="title"
                      placeholder="Title"
                      {...register("title", { required: true })}
                    />
                    {errors.title && (
                      <FormHelperText error id="component-error-text">
                        Title is required
                      </FormHelperText>
                    )}
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Desciption
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      id="desciption"
                      placeholder="Desciption"
                      {...register("desciption", { required: true })}
                    />
                    {errors.desciption && (
                      <FormHelperText error id="component-error-text">
                        Desciption is required
                      </FormHelperText>
                    )}
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Thumnail
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput id="thumnail" type="file" {...register("thumnail")} />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Trailers
                      </SoftTypography>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                        id="trailers"
                        placeholder="Link youtube"
                      />
                    </SoftBox>
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Rated
                      </SoftTypography>
                      <input
                        type="text"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                        id="rated"
                        placeholder="Rated"
                        {...register("rated", { required: true })}
                      />
                      {errors.rated && (
                        <FormHelperText error id="component-error-text">
                          Rated is required
                        </FormHelperText>
                      )}
                    </SoftBox>
                  </SoftBox>
                </div>
                <div>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Director
                      </SoftTypography>
                    </SoftBox>
                    <select
                      id="director"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5"
                      classNamePrefix="select"
                      {...register("director", { required: true })}
                    >
                      <option value={""}>Select</option>
                      {lstDirector.length > 0 &&
                        lstDirector.map((d) => (
                          <option key={d.directorId} value={d.directorId}>
                            {d.directorName}
                          </option>
                        ))}
                    </select>
                    {errors.director && (
                      <FormHelperText error id="component-error-text">
                        Director is required
                      </FormHelperText>
                    )}
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Category
                      </SoftTypography>
                    </SoftBox>
                    <Select
                      className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full "
                      isMulti
                      name="category"
                      options={lstCategory}
                      classNamePrefix="select"
                      onChange={onChangeCategory}
                    />
                  </SoftBox>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <SoftBox mb={2}>
                        <SoftBox mb={1} ml={0.5}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Hot
                          </SoftTypography>
                        </SoftBox>
                        <select
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                          {...register("hot")}
                        >
                          <option value="">Select...</option>
                          <option value="1">Hot</option>
                          <option value="0">Normal</option>
                        </select>
                      </SoftBox>
                    </div>
                    <div>
                      <SoftBox mb={2}>
                        <SoftBox mb={1} ml={0.5}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Cast
                          </SoftTypography>
                        </SoftBox>
                        <Select
                          className="border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full"
                          name="cast"
                          isMulti
                          options={lstCast}
                          classNamePrefix="select"
                          onChange={onChangeCast}
                        />
                      </SoftBox>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <SoftBox mb={2}>
                        <SoftBox mb={1} ml={0.5}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Running Time
                          </SoftTypography>
                        </SoftBox>
                        <SoftInput
                          id="runningTime"
                          placeholder="Running Time"
                          {...register("runningTime", { required: true })}
                        />
                        {errors.runningTime && (
                          <FormHelperText error id="component-error-text">
                            Running Time is required
                          </FormHelperText>
                        )}
                      </SoftBox>
                    </div>
                    <div>
                      <SoftBox mb={2}>
                        <SoftBox mb={1} ml={0.5}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Release Date
                          </SoftTypography>
                        </SoftBox>
                        <SoftInput type="date" id="releaseDate" {...register("releaseDate")} />
                      </SoftBox>
                    </div>
                  </div>
                </div>
              </div>
              <SoftBox mt={4} mb={1}>
                <SoftButton type="submit" variant="gradient" color="info">
                  Create
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default EditMovie;
