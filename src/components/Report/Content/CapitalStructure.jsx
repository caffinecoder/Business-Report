import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { capitalInfoLeft, capitalInfoRight } from "./TableData";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataContext } from "../../context/DataProvider";
const CapitalStructure = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const capitalStructure = data?.orderResult?.UCS?.CapitalHistories;
  const pieChartData = [
    {
      id: 0,
      value: 120,
      label: "Authorised Capital",
    },
    {
      id: 1,
      value: 50,
      label: "Paid Up Capital",
    },
  ];
  const formatKey = (numberString) => {
    // Remove any existing commas and spaces
    const cleanedNumberString = numberString.replace(/[ ,]/g, "");

    // Add commas after every three digits
    const formattedNumberString = cleanedNumberString.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    return formattedNumberString;
  };
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Capital Structure / Ownership
        </h2>
      </div>
      <Table borderAxis="both">
        <thead>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Authorized Capital
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Paid Up Capital
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(capitalStructure).map(([key, value]) => (
              <React.Fragment key={key}>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {value["Currency"]} {formatKey(value["@value"])}
                </td>
              </React.Fragment>
            ))}
          </tr>
        </tbody>
      </Table>
      <div className="my-3 flex justify-center">
        <PieChart series={[{ data: pieChartData }]} width={600} height={300} />
      </div>
    </div>
  );
};

export default CapitalStructure;
