import React, { useContext } from "react";
import { Table } from "@mui/joy";
import { DataContext } from "../../context/DataProvider";
const CurrentLiabilities = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const currentLiab = data?.orderResult?.UCS?.AdditionalInfo?.FlexiDetails;
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          {currentLiab["@TableHeader"]}
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
              {currentLiab["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {currentLiab["@Year2"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {currentLiab["@Year3"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentLiab.FlexiHead.map((FlexiHead, idx) => (
            <React.Fragment key={idx}>
              <tr>
                {FlexiHead["Head"] === "TOTAL" ? (
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    {FlexiHead["Head"]}
                  </td>
                ) : (
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {FlexiHead["Head"]}
                  </td>
                )}
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {FlexiHead["Year1"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {FlexiHead["Year2"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {FlexiHead["Year3"]}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CurrentLiabilities;
