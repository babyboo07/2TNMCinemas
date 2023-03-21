import React from "react";
import { Card, FormHelperText } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getDirectorbyId } from "API/director/director";
import { saveDirector } from "API/director/director";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

export default function UpdateDirector() {
  const { directorId } = useParams();
  const [directorName, setDirectorName] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const current = await getDirectorbyId(directorId);
    if (current) {
      setDirectorName(current.directorName);
    }
  };

  const onSubmitDirector = async (data) => {
    data.directorId = directorId;
    data.directorName = directorName;
    console.log(data);
    saveDirector(data);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox onSubmit={handleSubmit(onSubmitDirector)} component="form" role="form" p={2}>
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
                      value={directorName != null ? directorName : ""}
                      id="directorName"
                      onChange={(e) => {
                        setDirectorName(e.target.value);
                      }}
                    />
                  </SoftBox>
                </div>
              </div>
              <SoftBox mt={4} mb={1}>
                <SoftButton type="submit" variant="gradient" color="info">
                  Save
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