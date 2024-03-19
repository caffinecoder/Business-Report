import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { BalanceData } from "./TableData";
import { DataContext } from "../../context/DataProvider";

const BalanceSheet = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const balanceSheet = data?.orderResult?.UCS?.FinancialStatement?.BalanceSheet;

  const MainHead =
    data?.orderResult?.UCS?.FinancialStatement?.BalanceSheet?.MainHead;

  if (!balanceSheet) {
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
        <h2 className="text-lg font-semibold uppercase">Balance Sheet</h2>
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
              {balanceSheet["@Year1"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {balanceSheet["@Year2"]}
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
              }}
            >
              {balanceSheet["@Year3"]}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Period
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              12 months
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              12 months
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              12 months
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
              Type Of Financial
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Standalone
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Standalone
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Standalone
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
              Account Type
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Audited
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Audited
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Audited
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
              Source
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Public
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Public
            </td>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              Public
            </td>
          </tr>
        </tbody>
      </Table>
      <div>
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
            {MainHead.map((mainHead, idx) => (
              <React.Fragment key={idx}>
                <tr>
                  <th className="text-lg"
                    style={{
                      color: "#000",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                    colSpan="4"
                  >
                    {mainHead["@name"]}
                  </th>
                </tr>
                {mainHead.Head.map((head, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        {head["@name"]}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        {head["@Year1"]}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        {head["@Year2"]}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        {head["@Year3"]}
                      </td>
                    </tr>
                    {head.SubHead &&
                      head.SubHead.map((subHead, subIndex) => (
                        <tr key={subIndex}>
                          <td
                            style={{
                              color: "#000",
                              fontWeight: "500",
                              fontSize: "1rem",
                            }}
                          >
                            {subHead["@Name"]}
                          </td>
                          <td
                            style={{
                              color: "#000",
                              fontWeight: "500",
                              fontSize: "1rem",
                            }}
                          >
                            {subHead.Year1}
                          </td>
                          <td
                            style={{
                              color: "#000",
                              fontWeight: "500",
                              fontSize: "1rem",
                            }}
                          >
                            {subHead.Year2}
                          </td>
                          <td
                            style={{
                              color: "#000",
                              fontWeight: "500",
                              fontSize: "1rem",
                            }}
                          >
                            {subHead.Year3}
                          </td>
                        </tr>
                      ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BalanceSheet;
