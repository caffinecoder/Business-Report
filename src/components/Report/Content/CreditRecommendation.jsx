import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Table } from "@mui/joy";

const CreditRecommendation = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const creditRecommendation = data?.orderResult?.UCS?.creditRecommendation;
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };

  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Credit Recommendation
        </h2>
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
          {Object.entries(creditRecommendation).map(([key, value]) => (
            <tr key={key}>
              <th
                style={{
                  color: "#000",
                  fontWeight: "500",
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
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CreditRecommendation;
