import React, { useContext } from "react";
import { BarChart } from "@mui/icons-material";
import Table from "@mui/joy/Table";
import { DataContext } from "../../context/DataProvider";
const FinancialSummary = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const finHead =
    data?.orderResult?.UCS?.FinancialStatement?.FinancialSummary?.FinHead;

  const financialSummary =
    data?.orderResult?.UCS?.FinancialStatement?.FinancialSummary;

  if (!finHead || !financialSummary) {
    return <div>No financial Summary found</div>;
  }
  const formatKey = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between camel case words
      .replace(/_/g, " "); // Replace underscores with spaces
  };
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Financial Summary</h2>
      </div>
      <p className="font-semibold text-lg capitalize px-2 py-1">Net Worth</p>
      <Table
        borderAxis="both"
        stripe="odd"
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
              Year Ended
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Amount
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              Change
            </th>
          </tr>
        </thead>
        {finHead.map((head, idx) => {
          if (head.HeadName === "Net Worth") {
            const variation = finHead.find(
              (item) => item.HeadName === "Variation"
            );
            const variationYear = variation ? variation : "---";
            return (
              <tbody key={idx}>
                <tr>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {financialSummary["@Year1"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {head.Year1}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {variationYear?.Year1}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {financialSummary["@Year2"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {head.Year2}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {variationYear?.Year2}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {financialSummary["@Year3"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {head.Year3}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {variationYear?.Year3 ? variationYear.Year3 : "---"}
                  </td>
                </tr>
              </tbody>
            );
          }
          return null; // Render nothing if HeadName is not "Net Worth"
        })}
      </Table>
      <div>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
      </div>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Operating Revenue
        </p>
        <Table
          borderAxis="both"
          stripe="odd"
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          {finHead.map((head, idx) => {
            if (head.HeadName === "Operating Revenue") {
              const variationIndex = finHead.findIndex(
                (item, index) => index > idx && item.HeadName === "Variation"
              );
              const variation =
                variationIndex !== -1 ? finHead[variationIndex] : null;
              return (
                <tbody key={idx}>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year1"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year1}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year1}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year2"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year2}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year2}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year3"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year3}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year3 ? variation.Year3 : "---"}
                    </td>
                  </tr>
                </tbody>
              );
            }
            return null; // Render nothing if HeadName is not "Net Worth"
          })}
        </Table>
      </div>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Profit Before Tax
        </p>
        <Table
          borderAxis="both"
          stripe="odd"
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          {finHead.map((head, idx) => {
            if (head.HeadName === "Profit Before Tax") {
              const variationIndex = finHead.findIndex(
                (item, index) => index > idx && item.HeadName === "Variation"
              );
              const variation =
                variationIndex !== -1 ? finHead[variationIndex] : null;
              return (
                <tbody key={idx}>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year1"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year1}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year1}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year2"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year2}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year2}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year3"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year3}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year3 ? variation.Year3 : "---"}
                    </td>
                  </tr>
                </tbody>
              );
            }
            return null; // Render nothing if HeadName is not "Net Worth"
          })}
        </Table>
      </div>
      <div>
        <p className="font-semibold text-lg capitalize py-1 px-2">
          Profit After Tax
        </p>
        <Table
          borderAxis="both"
          stripe="odd"
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
                Year Ended
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Amount
              </th>
              <th
                style={{
                  color: "#000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Change
              </th>
            </tr>
          </thead>
          {finHead.map((head, idx) => {
            if (head.HeadName === "Profit After Tax") {
              const variationIndex = finHead.findIndex(
                (item, index) => index > idx && item.HeadName === "Variation"
              );
              const variation =
                variationIndex !== -1 ? finHead[variationIndex] : null;
              return (
                <tbody key={idx}>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year1"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year1}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year1}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year2"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year2}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year2}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {financialSummary["@Year3"]}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {head.Year3}
                    </td>
                    <td
                      style={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1rem",
                      }}
                    >
                      {variation?.Year3 ? variation.Year3 : "---"}
                    </td>
                  </tr>
                </tbody>
              );
            }
            return null; // Render nothing if HeadName is not "Net Worth"
          })}
        </Table>
      </div>
    </div>
  );
};

export default FinancialSummary;
