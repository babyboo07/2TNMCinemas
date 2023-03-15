/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";

function FullName({ name, email }) {
  return (
    <SoftBox display="flex" alignItems="center" px={1} py={0.5}>
      <SoftBox display="flex" flexDirection="column">
        <SoftTypography variant="button" fontWeight="medium">
          {name}
        </SoftTypography>
        <SoftTypography variant="caption" color="secondary">
          {email}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

function Function({ job, org }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {org}
      </SoftTypography>
    </SoftBox>
  );
}

const userTableData = {
  columns: [
    { name: "FullName", align: "left" },
    { name: "Gender", align: "left" },
    { name: "Roles", align: "center" },
    { name: "Address", align: "center" },
    { name: "PhoneNumber", align: "center" },
    { name: "action", align: "center" },
  ],

  rows: [
    {
      FullName: <FullName name="John Michael" email="john@creative-tim.com" />,
      Gender: <Function job="Manager" org="Organization" />,
      Roles: (
        <SoftBadge
          variant="gradient"
          badgeContent="Super Admin"
          color="success"
          size="xs"
          container
        />
      ),
      Address: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          Ha Noi
        </SoftTypography>
      ),
      PhoneNumber: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          096855402
        </SoftTypography>
      ),
      action: (
        <div>
          <SoftTypography
            component="a"
            href="tables/edit"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Edit
          </SoftTypography>
          <SoftTypography
            ml={2}
            component="a"
            href="tables/edit"
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Delete
          </SoftTypography>
        </div>
      ),
    },
  ],
};

export default userTableData;
