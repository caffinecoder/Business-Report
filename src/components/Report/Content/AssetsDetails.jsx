import React, { useContext } from "react";
import { Table } from "@mui/joy";
import { DataContext } from "../../context/DataProvider";
const AssetsDetails = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const assetsDetails = data?.orderResult?.UCS?.AdditionalInfo?.AssetDetails;
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Assets Details</h2>
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
            <th colSpan={4}
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {assetsDetails["@AsOn"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {assetsDetails.Asset.map((Asset, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td
                  style={{
                    fontWeight: Asset === "TOTAL" ? 600 : 500,
                    color: "#000",
                    fontSize: "1rem",
                  }}
                >
                  {Asset}
                </td>
                <td colSpan={4}
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {assetsDetails.AssetValue[idx]}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AssetsDetails;
