import React from "react";
import Table from "@mui/joy/Table";
import { directorsInfo } from "./TableData";
const Directors = () => {
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Directors / Principals
        </h2>
      </div>
      <Table
        borderAxis="both"
        stripe="odd"
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
              Name
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Designation
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Date of Joining
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              DIN
            </th>
          </tr>
        </thead>
        <tbody>
          {directorsInfo.map((item, idx) => (
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
                {item.designation}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.joining}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.din}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Directors;