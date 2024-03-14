import React from "react";
import Table from "@mui/joy/Table";
import { shareHolderInfo } from "./TableData";
const ShareHolders = () => {
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold capitalize">
          Shareholding Structure / Major Shareholder(s) (As on December 31, 2023
          (Major Shareholding))
        </h2>
      </div>
      <p className="text-base font-semibold py-1 px-2 bg-[#DDE7EE]">
        Equity ( Major Shareholder(s))
      </p>
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
              Name
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Nationality/Country of Origin
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              No. of Shares
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Holding(%)
            </th>
          </tr>
        </thead>
        <tbody>
          {shareHolderInfo.map((item, idx) => (
            <tr key={idx}>
              <td
                style={{
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
                {item.country}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.shares}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.holding}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Totals
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            ></td>
            <td
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              50.7
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              201
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default ShareHolders;
