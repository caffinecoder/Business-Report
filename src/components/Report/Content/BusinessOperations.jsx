import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const BusinessOperations = () => {
  const { data, loading, error } = useContext(DataContext);
  if (loading) {
    return <div>loading....</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const businessOperation = data?.orderResult?.UCS;
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Business Operations</h2>
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
        <tbody>
          <tr>
            <td style={{ border: "1px solid #333" }} colSpan={2}>
              <p className="text-base">
                {businessOperation.Operations.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </td>
          </tr>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Listing on Stock
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {businessOperation.StockListing.Listed}
            </td>
          </tr>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Exchange Listed at
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {businessOperation.StockListing.Exchange}
            </td>
          </tr>
          {Object.entries(businessOperation.ShareTradeDetails).map(
            ([key, value]) => (
              <tr key={key}>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {formatKey(key)}
                </th>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {value}
                </td>
              </tr>
            )
          )}
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Litigation
            </th>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {businessOperation.LegalActions.LitigationComments}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default BusinessOperations;
