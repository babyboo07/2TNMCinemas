import React from "react";
import { Card, FormHelperText } from "@mui/material";
import { getCastbyId } from "API/cast/cast";
import { saveCast } from "API/cast/cast";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { setDirection } from "context";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

export default function UpdateDirector() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { directorId } = useParams();

  const [director, setDirector] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const current = await getDirectorbyId(castId);
    if (current) {
      console.log(directorId);
      console.log(current);
      setDirector(current);
    }
  };

  const onSubmitNewUser = async (data) => {
    console.log(cast);
    await setDirector(cast);
  };

  const handleOnchange = (event) => {
    const fields = { ...director };

    fields["directorName"] = event.target.value;
    setCast(fields);
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
                    <input
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                      type="text"
                      value={cast != null ? cast.castName : ""}
                      onChange={handleOnchange}
                    />
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
