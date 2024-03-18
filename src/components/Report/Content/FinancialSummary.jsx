import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { FinancialData } from "./TableData";
import { DataContext } from "../../context/DataProvider";
const FinancialSummary = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const finHead =
    data?.orderResult?.UCS?.FinancialStatement?.FinancialSummary?.FinHead;

  const financialSummary =
    data?.orderResult?.UCS?.FinancialStatement?.FinancialSummary;

  if (!finHead || !financialSummary) {
    return <div>No financial Summary found</div>;
  }
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };
  return (
    <div className=" overflow-hidden border  mt-5">
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
        <tbody>
          {finHead.map((head, idx) => (
            <>
              <tr key={idx}>
                <td>{financialSummary["@Year1"]}</td>
                <td>{head.Year1}</td>
                <td>
                  {head.Year1
                    ? head.Year1.includes("%")
                      ? ""
                      : `${head.Year1}%`
                    : ""}
                </td>
              </tr>
              <tr key={`${idx}-variation`}>
                <td>{financialSummary["@Year2"]}</td>
                <td>{head.Year2}</td>
                <td>
                  {head.Year2
                    ? head.Year2.includes("%")
                      ? ""
                      : `${head.Year2}%`
                    : ""}
                </td>
              </tr>
              <tr key={`${idx}-variation`}>
                <td>{financialSummary["@Year3"]}</td>
                <td>{head.Year3}</td>
                <td>
                  {head.Year3
                    ? head.Year3.includes("%")
                      ? ""
                      : `${head.Year3}%`
                    : ""}
                </td>
              </tr>
            </>
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
