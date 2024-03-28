import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Table } from "@mui/joy";

const Location = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const operationalDetails = data?.orderResult?.UCS?.Locations?.Location;

  return (
    <div className="overflow-hidden border mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Location(s)</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {operationalDetails.map((location, index) => (
            <React.Fragment key={index}>
              <tr>
                <th
                  style={{
                    width: "30%",
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  Plant
                </th>
                <td
                  style={{
                    width: "30%",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {location.Address}, {location.City} - {location.PinCode}
                  {location.State}, {location.Country}
                </td>
              </tr>
              {location.Phone && (
                <tr key={`${index}-phone`}>
                  <th
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    Phone
                  </th>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {location.Phone}
                  </td>
                </tr>
              )}
              {location.Fax && (
                <tr key={`${index}-fax`}>
                  <th
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    Fax
                  </th>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {location.Fax}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Location;
