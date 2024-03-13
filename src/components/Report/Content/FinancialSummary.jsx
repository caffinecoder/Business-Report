import React from "react";
import Table from "@mui/joy/Table";
import { FinancialData } from "./TableData";
const FinancialSummary = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Financial Summary</h2>
      </div>
      <p className="font-semibold text-lg capitalize px-2 py-1">Net Worth</p>
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
              Year Ended
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Amount
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Change
            </th>
          </tr>
        </thead>
        <tbody>
          {FinancialData.map((item, idx) => (
            <tr key={idx}>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.years}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.amount}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: "500",
                  fontSize: "1rem",
                }}
              >
                {item.change}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Operating Revenue
        </p>
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {FinancialData.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.years}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.amount}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Profit Before Tax
        </p>
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {FinancialData.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.years}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.amount}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Profit After Tax
        </p>
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          <tbody>
            {FinancialData.map((item, idx) => (
              <tr key={idx}>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.years}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.amount}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.change}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FinancialSummary;
