import { Card } from "@mui/material";
import { deleteMovieDay } from "API/movieDay/movieDay";
import { getListMovieDay } from "API/movieDay/movieDay";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TableMovieDay() {
  const [lstMovieDay, setLstMovieDay] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getListMovieDay();
    if (data) {
      setLstMovieDay(data);
    }
  };

  const handleDelete = (id) => {
    deleteMovieDay(id);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Movie Day Table</SoftTypography>
              <Link to={"/movie_day/create"}>
                <SoftButton variant="gradient" color="info">
                  Create New
                </SoftButton>
              </Link>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Movie Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Show Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Show Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {lstMovieDay.length > 0 &&
                      lstMovieDay.map((movieDay) => (
                        <tr key={movieDay.id} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4">{movieDay.movieRes.titile}</td>
                          <td className="px-6 py-4">{movieDay.showDate}</td>
                          <td className="px-6 py-4">{movieDay.showTime}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div
                                data-te-chip-init
                                data-te-ripple-init
                                className={`${"bg-rose-600 [word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] text-white"}`}
                                data-te-close="true"
                              >
                                <button onClick={() => handleDelete(movieDay.id)}>DELETE</button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </SoftBox>
          </Card>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
