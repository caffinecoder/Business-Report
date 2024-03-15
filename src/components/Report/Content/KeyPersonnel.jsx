import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";

const KeyPersonnel = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const executives = data?.orderResult?.UCS?.ChiefExecutive?.KeyExecutive;

  if (!executives || executives.length === 0) {
    return <div>No key personnel found</div>;
  }

  // Function to format key with spaces between camel case words
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };

  return (
    <div className="overflow-hidden border mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Key Personnel</h2>
      </div>
      <Table borderAxis="both">
        <thead>
          <tr>
            {Object.entries(executives[0]).map(
              ([key, value]) =>
                key &&
                value && (
                  <th
                    key={key}
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {formatKey(key)}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {executives.map((executive, idx) => (
            <tr key={idx}>
              {Object.values(executive).map(
                (value, idx) =>
                  value && (
                    <td
                      key={idx}
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {value}
                    </td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default KeyPersonnel;
