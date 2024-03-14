import React from "react";
import { Table } from "@mui/joy";
import { ConsolidatedBalData } from "./TableData";
const ConsolidateBalance = () => {
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Consolidated Balance Sheet
        </h2>
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
                backgroundColor: "#eee",
              }}
            >
              For the Year Ending
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2023
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2022
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2021
            </th>
          </tr>
        </thead>
        <tbody>
          {ConsolidatedBalData.map((item, idx) => (
            <tr key={idx}>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ConsolidateBalance;
