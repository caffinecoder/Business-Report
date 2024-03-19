import React, { useContext } from "react";
import { Table } from "@mui/joy";
import { DataContext } from "../../context/DataProvider";
const ConsolidateBalance = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const consolidate = data?.orderResult?.UCS?.FinancialStatementConsolidated;

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
        {/* <thead>
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
              {consolidate.BSNewDataConsolidated["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {consolidate.BSNewDataConsolidated["@Year2"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {consolidate.BSNewDataConsolidated["@Year3"]}
            </th>
          </tr>
          <tr>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Period
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["PeriodYear1"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["PeriodYear2"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            ></td>
          </tr>
          <tr>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Type Of Financial
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["TypeOfFinancial"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["TypeOfFinancial"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["TypeOfFinancial"]}
            </td>
          </tr>
          <tr>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Account Type
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["AccountTypeYear1"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["AccountTypeYear2"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            ></td>
          </tr>
          <tr>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Source
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["SourceYear1"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {consolidate["SourceYear2"]}
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            ></td>
          </tr>
        </thead> */}
        <tbody>
          {consolidate.BSNewDataConsolidated.MainHead.map((MainHead, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <th colSpan={4}>{MainHead["@name"]}</th>
              </tr>
              {MainHead.Head.map((Head, idx) => (
                <tr key={idx}>
                  <td>{Head["@name"]}</td>
                </tr>
              ))}
              {MainHead.Head.map((Head, idx) =>
                Head.SubHead && Head.SubHead.map((SubHead, idx) => (
                  <tr key={idx}>
                    <td>{SubHead["@Name"]}</td>
                    <td>{SubHead.Year1}</td>
                    <td>{SubHead.Year2}</td>
                    <td>{SubHead.Year3}</td>
                  </tr>
                ))
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ConsolidateBalance;
