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
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { listUser } from "API/member/user";

function TablesUser() {
  const [listMember, setListMember] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await listUser();
    setListMember(list);
  };
=======
import userTableData from "./data/userTablesDate";
import { useEffect, useState } from "react";

function TablesUser(prop) {
  const { columns, rows } = userTableData;
  const [listMenber, setListMember]= useState();

  useEffect(()=>{

  },[])
>>>>>>> 7977df946177571bd9e432383a2cf436e27b7706

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">Member table</SoftTypography>
              <Link to={"/member/create"}>
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
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Gender
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Roles
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Phone number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listMember.length > 0 &&
                      listMember.map((u) => (
                        <tr key={u.userId} className="bg-white border-b hover:bg-gray-50">
                          <th
                            scope="row"
                            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                          >
                            <div className="pl-3">
                              <div className="text-base font-semibold">{u.fullName}</div>
                              <div className="font-normal text-gray-500">{u.email}</div>
                            </div>
                          </th>
                          {u.gender === 1 ? (
                            <td className="px-6 py-4">Male</td>
                          ) : (
                            <td className="px-6 py-4">Female</td>
                          )}
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              
                              <div
                                data-te-chip-init
                                data-te-ripple-init
                                className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                                data-te-close="true"
                              >
                                {u.roles[0].roleName}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">{u.phoneNumber}</td>
                          <td className="px-6 py-4">{u.address}</td>
                          <td className="px-6 py-4">
                            <Link to="#" className="font-medium text-blue-600  hover:underline">
                              Edit user
                            </Link>
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

export default TablesUser;
