import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { executivSummaryInfo } from "./TableData";
import { DataContext } from "../../context/DataProvider";
const ExecutiveSummary = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const executiveDetails = data?.orderResult?.UCS;
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Executive Summary</h2>
      </div>
      <Table
        borderAxis="both"
        stripe="even"
        hoverRow
        sx={{
          captionSide: "top",
          "& tbody": { bgcolor: "background.surface" },
        }}
      >
        <tbody>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Report ID
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.ReportID}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Company Name
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.CompanyName.Name}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Company Status
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.CompanyStatus}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Legal Form
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.LegalForm}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Regd/Formation Date
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.RegistrationDate}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Incorporation No
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.companyBusinessRegNo.InocrporationNo}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              PAN
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.companyBusinessRegNo.PAN}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              GSTIN
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.companyBusinessRegNo.GSTIN}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Listed
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.StockListing.Listed}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              No. of Employees
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.Manpower}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Business Activity
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.PrincipalBusiness}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              SIC Code(s)
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails?.SicDetails?.SicCodes.map((item, idx) => (
                <p>
                  {item.SicCode} - {item.SicDescription}
                </p>
              ))}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              NACE Code(s)
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails.NACEDetails.NACECodes.map((item, idx) => (
                <p>
                  {item.NACECode} - {item.NACEDescription}
                </p>
              ))}
            </td>
          </tr>
          <tr>
            <th
              style={{
                width: "30%",
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Notes
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {executiveDetails?.RegisteredAddress?.StatusComments}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ExecutiveSummary;
