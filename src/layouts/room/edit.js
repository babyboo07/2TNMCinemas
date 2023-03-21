import React from "react";
import { Card, FormHelperText } from "@mui/material";
import { getRoombyId } from "API/room/room";
import { saveRoom } from "API/room/room";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

export default function UpdateRoom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { roomId } = useParams();

  const [room, setRoom] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const current = await getRoombyId(roomId);
    if (current) {
      console.log(roomId);
      console.log(current);
      setRoom(current);
    }
  };

  const onSubmitNewUser = async (data) => {
    console.log(room);
    await saveRoom (room);
  };

  const handleOnchange = (event) => {
    const fields = { ...room };

    fields["roomName"] = event.target.value;
    setRoom(fields);
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
                       Room Name
                      </SoftTypography>
                    </SoftBox>
                    <input
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5 "
                      type="text"
                      value={room != null ? room.roomName : ""}
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
