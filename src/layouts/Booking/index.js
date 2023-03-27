import { Card } from "@mui/material";
import { approveBooking } from "API/booking/bookings";
import { listMovieBooking } from "API/booking/bookings";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import { useEffect } from "react";

export default function TableBookingDepot() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const bookingData = await listMovieBooking();

    if (bookingData) {
      setBookings(bookingData);
    }
  };

  const approveBookingDepot = (id) => {
    approveBooking(id);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Booking Table</SoftTypography>
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
                        Order By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Movie Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Room
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Seat Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Order Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Show Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Show Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.length > 0 &&
                      bookings.map((c) => (
                        <tr key={c.castId} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4">{c.email}</td>
                          <td className="px-6 py-4">{c.movieName}</td>
                          <td className="px-6 py-4">{c.roomName}</td>
                          <td className="px-6 py-4">{c.seatName}</td>
                          <td className="px-6 py-4">{c.orderDate}</td>
                          <td className="px-6 py-4">{c.showDate}</td>
                          <td className="px-6 py-4">{c.showTime}</td>
                          <td className="px-6 py-4">
                            {c.status === 1 ? (
                              <span className="text-green-500">In Process</span>
                            ) : (
                              <span className="text-red-300">Approve</span>
                            )}
                          </td>
                          {c.status !== 2 && (
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div
                                  data-te-chip-init
                                  data-te-ripple-init
                                  className={`${"bg-red-500  [word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] text-white"}`}
                                  data-te-close="true"
                                >
                                  <button
                                    type="button"
                                    onClick={() => approveBookingDepot(c.bookingId)}
                                    className="font-medium text-white uppercase"
                                  >
                                    Approve
                                  </button>
                                </div>
                              </div>
                            </td>
                          )}
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
