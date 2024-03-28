import { Table } from "@mui/joy";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const NegativeSearch = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const negativeSearch = data?.orderResult?.UCS?.NegativeSearch.NegativeInfo;

  return (
    <div className="overflow-hidden border mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Negative Search</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {negativeSearch.map(
            (item, idx) =>
              item.Head &&
              item.Value && (
                <React.Fragment key={idx}>
                  <tr>
                    <th
                      style={{
                        width: "40%",
                        color: "#000",
                        fontWeight: "600",
                        fontSize: "1rem",
                      }}
                    >
                      {item.Head}
                    </th>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {item.Value}
                    </td>
                  </tr>
                </React.Fragment>
              )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default NegativeSearch;
