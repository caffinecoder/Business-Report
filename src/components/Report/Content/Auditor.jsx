import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";

const Auditor = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const auditor = data?.orderResult?.UCS?.Auditors?.Auditor;

  if (!auditor) {
    return <div>No auditor found</div>;
  }

  return (
    <div className="overflow-hidden border mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Auditor</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {Object.entries(auditor).map(
            ([key, value]) =>
              key &&
              value && (
                <tr key={key}>
                  <td
                    style={{
                      textTransform: 'capitalize',
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {key}:
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

export default Auditor;
