import React, { useContext } from "react";
import { Table } from "@mui/joy";
import { BorrowingData } from "./TableData";
import { DataContext } from "../../context/DataProvider";
const Borrowings = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const shortTermBorrow =
    data?.orderResult?.UCS?.AdditionalInfo?.ShortTermBorrowings;
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">
          Short Term Borrowings
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
              {shortTermBorrow["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {shortTermBorrow["@Year2"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {shortTermBorrow["@Year3"]}
            </th>
          </tr>
        </thead>
        <tbody>
          {shortTermBorrow.Borrowing.map((Borrowing, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {Borrowing["HeadName"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {Borrowing["Year1"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {Borrowing["Year2"]}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {Borrowing["Year3"]}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Borrowings;
