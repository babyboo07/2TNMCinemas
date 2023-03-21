// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import SoftButton from "components/SoftButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listMovies } from "API/movies/movie";

function Tables() {
  const [listMovie, setListMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await listMovies();
    setListMovie(list);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Movies Table</SoftTypography>
              <Link to={"/movies/create"}>
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
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Director
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Release Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Rated
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Create By
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listMovie.length > 0 &&
                      listMovie.map((m) => (
                        <tr key={m.id} className="bg-white border-b hover:bg-gray-50">
                          <td className="px-6 py-4">{m.titile}</td>
                          <td className="px-6 py-4">{m.directorName}</td>
                          <td className="px-6 py-4">{m.releaseDate}</td>
                          <td className="px-6 py-4">{m.rated}</td>
                          <td className="px-6 py-4">{m.createByName}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div
                                data-te-chip-init
                                data-te-ripple-init
                                className={`${"bg-amber-300  [word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] text-white"}`}
                                data-te-close="true"
                              >
                                <Link className="uppercase" to={"/movies/edit/" + m.id}>
                                  update
                                </Link>
                              </div>
                              <div
                                data-te-chip-init
                                data-te-ripple-init
                                className={`${"bg-teal-300  [word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] text-white"}`}
                                data-te-close="true"
                              >
                                <Link className="uppercase" to={"/movies/detail/" + m.id}>
                                  detail
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    ;
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

export default Tables;
