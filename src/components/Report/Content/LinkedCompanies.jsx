import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { Table } from "@mui/joy";

const LinkedCompanies = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const linkedCompanies =
    data?.orderResult?.UCS?.LinkedCompanies?.LinkedCompany;

  let prevRelationType = "";

  return (
    <div className=" overflow-hidden border border-r-gray-900  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Linked Companies</h2>
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
        <tbody>
          {linkedCompanies.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.RelationType !== prevRelationType && (
                <tr>
                  <th
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.RelationType}
                  </th>
                </tr>
              )}

              {(prevRelationType = item.RelationType) && (
                <tr>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                      paddingLeft: "20px",
                    }}
                  >
                    {item.Name}
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

export default LinkedCompanies;
