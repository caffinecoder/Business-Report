import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const ShareHolders = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const shareHolders = data?.orderResult?.UCS?.ShareHolders?.ShareHolder;
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };
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
            {Object.entries(shareHolders[0]).map(
              ([key, value]) =>
                key &&
                value && (
                  <React.Fragment key={key}>
                    <th
                      style={{
                        color: "#000",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      {formatKey(key)}
                    </th>
                  </React.Fragment>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {shareHolders.map((item, idx) => (
            <tr key={idx}>
              <td
                style={{
                  color: "#000",
                  fontWeight: item.Name === "TOTAL" ? 600 : 500,
                  fontSize: "1rem",
                }}
              >
                {item.Name}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: item.Name === "TOTAL" ? 600 : 500,
                  fontSize: "1rem",
                }}
              >
                {item.NoOfShares}
              </td>
              <td
                style={{
                  color: "#000",
                  fontWeight: item.Name === "TOTAL" ? 600 : 500,
                  fontSize: "1rem",
                }}
              >
                {item.PercentageHolding}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShareHolders;
