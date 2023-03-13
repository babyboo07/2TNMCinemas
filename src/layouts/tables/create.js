import { Card, FormHelperText } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { useForm } from "react-hook-form";

const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const Createnew = () => {
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
              <SoftBox mb={2}>
                <SoftBox mb={1} ml={0.5}>
                  <SoftTypography>
                    
                  </SoftTypography>
                </SoftBox>
              </SoftBox>

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

export default Createnew;
