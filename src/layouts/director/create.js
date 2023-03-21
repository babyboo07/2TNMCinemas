import { Card, FormHelperText } from "@mui/material";
import { saveCast } from "API/cast/cast";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { useForm } from "react-hook-form";

const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

export default function CreateDirector() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitNewUser = async (data) => {
    console.log(data);
    await saveDirector(data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox onSubmit={handleSubmit(onSubmitNewUser)} component="form" role="form" p={2}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <SoftBox mb={2}>
                    <SoftBox mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                      Director Name
                      </SoftTypography>
                    </SoftBox>
                    <SoftInput
                      id="directorName"
                      placeholder="Director Name"
                      {...register("directorName", { required: true })}
                    />
                    {errors.directorName && (
                      <FormHelperText error id="component-error-text">
                       Director Name is required
                      </FormHelperText>
                    )}
                  </SoftBox>

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
}
