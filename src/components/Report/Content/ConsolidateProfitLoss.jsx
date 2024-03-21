import { Table } from "@mui/joy";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const ConsolidateProfitLoss = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const consolidatePL =
    data?.orderResult?.UCS?.FinancialStatementConsolidated
      ?.PLNewDataConsolidated;

  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Consolidated Profit & Loss
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
              {consolidatePL["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {consolidatePL["@Year2"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {consolidatePL.Head.map((Head, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <th
                  style={{
                    color: "#000",
                    fontWeight:
                      Head["@value"] === "Exceptional items" ? 500 : 600,
                    fontSize: "1rem",
                  }}
                >
                  {Head["@value"]}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {Head["@Year1"]}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {Head["@Year2"]}
                </th>
              </tr>
              {Head.SubHead &&
                Head.SubHead.map((SubHead, idx) => (
                  <tr key={idx}>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {SubHead["@value"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {SubHead.Year1}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {SubHead.Year2}
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ConsolidateProfitLoss;
