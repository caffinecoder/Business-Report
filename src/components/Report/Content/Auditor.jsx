import React from "react";
import Table from "@mui/joy/Table";
import { AuditorData } from "./TableData";
const Auditor = () => {
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Auditor</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {AuditorData.map((item, idx) => (
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
                {item.labelData}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Auditor;
