import { Card } from "@mui/material";
import { getCastbyId } from "API/cast/cast";
import { URL_IMG } from "AppConstants";
import SoftBox from "components/SoftBox";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

const DetailCast = () => {
  const {castId} = useParams();

  
  const [cast, setCast] = useState({});
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const current = await getCastbyId(castId);
    if (current) {
      setCast(current);
    }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox p={2}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex pt-3">
                    <span className="pr-3 text-base font-medium">Cast Name: {cast?.castName}</span>
                    <span className="object-cover w-96">
                      <img src={URL_IMG + cast.image} alt="" />
                    </span>
                  </div>
                </div>
                <div>                 
                </div>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default DetailCast;
