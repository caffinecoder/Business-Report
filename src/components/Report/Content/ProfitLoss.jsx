import React from "react";
import Table from "@mui/joy/Table";
import { ProfitLossData } from "./TableData";
const ProfitLoss = () => {
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Profit & Loss A/C</h2>
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
        <thead>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              For the Year Ending
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              31-Mar-2023
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              31-Mar-2022
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              31-Mar-2021
            </th>
          </tr>
        </thead>
        <tbody>
          {ProfitLossData.map((item, idx) => (
            <tr key={idx}>
              {item.label === "Revenue" ||
              item.label === "Expenses" ||
              item.label ===
                "Profit before exceptional and extraordinary items and tax" ||
              item.label === "Exceptional items" ||
              item.label === "Profit before extraordinary items and tax" ||
              item.label === "Profit (Loss) before tax" ||
              item.label === "Tax Expenses" ||
              item.label ===
                "Profit (Loss) for the period from continuing operations" ||
              item.label === "Profit (Loss) for the period" ||
              item.label === "Earnings per equity share:Basic" ||
              item.label === "Earnings per equity share:Diluted" ? (
                <>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2023}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2022}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2021}
                  </td>
                </>
              ) : (
                <>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2023}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2022}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2021}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProfitLoss;
