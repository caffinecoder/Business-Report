import React from "react";
import Table from "@mui/joy/Table";
import { bankerDetails } from "./TableData";
const Banker = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Banker</h2>
      </div>
      <Table
        borderAxis="both"
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
              Bank Name
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Bank Address
            </th>
          </tr>
        </thead>
        <tbody>
          {bankerDetails.map((item, idx) => (
            <tr key={idx}>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.bankAddress}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Banker;
