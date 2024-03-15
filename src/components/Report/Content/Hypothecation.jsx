import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const Hypothecation = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const hypothecation =
    data?.orderResult?.UCS?.HypothecationDetails?.Hypothecation;

  if (!hypothecation) {
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
        <h2 className="text-lg font-semibold uppercase">
          Hypothecation Details
        </h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {Object.entries(hypothecation).map(
            ([key, value]) =>
              key &&
              value && (
                <tr key={key}>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {formatKey(key)}
                  </td>
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
        </tbody>
      </Table>
    </div>
  );
};

export default Hypothecation;
