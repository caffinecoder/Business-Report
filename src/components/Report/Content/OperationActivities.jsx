import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Table } from "@mui/joy";
const OperationActivities = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const operationalDetails =
    data?.orderResult?.UCS?.OperationActivities?.OtherOperation;

  const companyTrades = data?.orderResult?.UCS?.CompanyTrades?.Trade;
  const replaceMainTrade = (mainTrade) => {
    switch (mainTrade) {
      case "Import details":
        return "Import From";
      case "Export details":
        return "Export To";
      case "References":
        return "Trade References";
      default:
        return mainTrade;
    }
  };
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Operational Activities
        </h2>
      </div>
      <Table borderAxis="both">
        <thead>
          <tr>
            {operationalDetails.map((item, idx) => (
              <React.Fragment key={idx}>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {item.Operation}
                </th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {operationalDetails.map((item, idx) => (
              <React.Fragment key={idx}>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {item.OperationDetail.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </td>
              </React.Fragment>
            ))}
          </tr>
          <tr>
            <th
              colSpan={2}
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Company Trades
            </th>
          </tr>
          {companyTrades &&
            companyTrades.map((item, idx) => (
              <tr>
                <React.Fragment key={idx}>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {replaceMainTrade(item.MainTrade)}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.Value.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </td>
                </React.Fragment>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OperationActivities;
