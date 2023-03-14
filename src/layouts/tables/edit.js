import { Card, FormHelperText } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { useState } from "react";
import { useForm } from "react-hook-form";

const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const EditMovie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                    <SoftInput id="thumnail" type="file" />
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Trailers
                      </SoftTypography>
                      <SoftInput id="trailers" placeholder="Link youtube" />
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
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                      {...register("category")}
                    >
                      <option value="">Select...</option>
                      <option value="A">Category A</option>
                      <option value="B">Category B</option>
                    </select>
                  </SoftBox>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Category
                      </SoftTypography>
                    </SoftBox>
                    <select
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                      {...register("category")}
                    >
                      <option value="">Select...</option>
                      <option value="A">Category A</option>
                      <option value="B">Category B</option>
                    </select>
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
                          {...register("category")}
                        >
                          <option value="">Select...</option>
                          <option value="A">Hot</option>
                          <option value="B">Category B</option>
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
                        <select
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                          {...register("category")}
                        >
                          <option value="">Select...</option>
                          <option value="A">Hot</option>
                          <option value="B">Category B</option>
                        </select>
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
                        <SoftInput id="runningTime" placeholder="Running Time" />
                      </SoftBox>
                    </div>
                    <div>
                      <SoftBox mb={2}>
                        <SoftBox mb={1} ml={0.5}>
                          <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Release Date
                          </SoftTypography>
                        </SoftBox>
                        <SoftInput type="date" id="releaseDate" />
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
