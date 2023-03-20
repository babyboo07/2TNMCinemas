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
import { listUser } from "API/member/user";
import { MEMBER } from "AppConstants";
import { ADMIN } from "AppConstants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function TablesUser() {
  const [listMember, setListMember] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const list = await listUser();
    setListMember(list);
  };

  const confirmModal = (id) => {
    setShowModal(true);
  };

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
                              {u.roles[0].roleId === MEMBER ? (
                                <div
                                  data-te-chip-init
                                  data-te-ripple-init
                                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                                  data-te-close="true"
                                >
                                  {u.roles[0].roleName}
                                </div>
                              ) : u.roles[0].roleId === ADMIN ? (
                                <div
                                  data-te-chip-init
                                  data-te-ripple-init
                                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-green-500 py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                                  data-te-close="true"
                                >
                                  {u.roles[0].roleName}
                                </div>
                              ) : (
                                <div
                                  data-te-chip-init
                                  data-te-ripple-init
                                  className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-red-500 py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                                  data-te-close="true"
                                >
                                  {u.roles[0].roleName}
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4">{u.phoneNumber}</td>
                          <td className="px-6 py-4">{u.address}</td>
                          <td className="px-6 py-4">
                            <Link
                              to={"/member/edit/" + u.userId}
                              className="font-medium text-blue-600  hover:underline"
                            >
                              Edit user
                            </Link>
                            <button
                              type="button"
                              className="font-medium ml-2 text-green-600"
                              onClick={() => confirmModal(u.userId)}
                            >
                              Up role
                            </button>
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Update Role Users</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon
                      className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
                      icon={faX}
                    />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure to uprole this users?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-cyan-500 text-white active:bg-cyan-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    // onClick={() => deleteUserByID()}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </DashboardLayout>
  );
}

export default TablesUser;
