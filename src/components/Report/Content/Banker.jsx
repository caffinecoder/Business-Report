import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const Banker = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const banker = data?.orderResult?.UCS?.Bankers?.Banker;

  if (!banker || banker.length === 0) {
    return <div>No hypothecation found</div>;
  }
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Banker</h2>
      </div>
      <Table borderAxis="both">
        <thead>
          <tr>
            {Object.entries(banker[0]).map(
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
          <tr>
            {Object.entries(banker[0]).map(
              ([key, value]) =>
                key &&
                value && (
                  <td
                    key={key}
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
        </tbody>
      </Table>
    </div>
  );
};

export default Banker;
