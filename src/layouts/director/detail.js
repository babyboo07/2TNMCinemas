import { Card } from "@mui/material";
import { getDirectorbyId } from "API/director/director";
import { URL_IMG } from "AppConstants";
import SoftBox from "components/SoftBox";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const { default: Footer } = require("examples/Footer");
const { default: DashboardLayout } = require("examples/LayoutContainers/DashboardLayout");
const { default: DashboardNavbar } = require("examples/Navbars/DashboardNavbar");

export default function DetailDirector() {
  const { directorId } = useParams();
  const [director, setDirector] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const current = await getDirectorbyId(directorId);
    if (current) {
      setDirector(current);
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
                    <span className="pr-3 text-base font-medium">
                      Director Name : {director.directorName}
                    </span>
                    <span className="object-cover w-96">
                      <img src={URL_IMG + director.directorImage} alt="" />
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
