import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const ProfitLoss = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const profitLossData =
    data?.orderResult?.UCS?.FinancialStatementConsolidated
      ?.PLNewDataConsolidated;
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
              {profitLossData["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {profitLossData["@Year2"]}
            </th>
            {profitLossData["@Year3"] && (
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                {profitLossData["@Year3"]}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {profitLossData.Head.map((Head, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <th
                  style={{
                    color: "#000",
                    fontWeight: Head["@value"] === "Exceptional items" ? 500 : 600,
                    fontSize: "1rem",
                  }}
                >
                  {Head["@value"]}
                </th>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {Head["@Year1"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {Head["@Year2"]}
                </td>
                {Head["@Year3"] && (
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {Head["@Year3"]}
                  </td>
                )}
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
                      {SubHead["Year1"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {SubHead["Year2"]}
                    </td>
                    {SubHead["@Year3"] && (
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {SubHead["@Year3"]}
                      </td>
                    )}
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProfitLoss;
