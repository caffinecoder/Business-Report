import React, { useContext } from "react";
import { Table } from "@mui/joy";
import { EfficiecyRatioData, ProfitabilityRatioData } from "./TableData";
import { DataContext } from "../../context/DataProvider";
const KeyRatio = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const keyratioinfo = data?.orderResult?.UCS?.FinancialStatement?.KeyRatios;

  const showContent = {
    
  }

  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">KEY RATIOS</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {keyratioinfo.RatioType.map((RatioType, idx) => (
            <React.Fragment key={idx}>
              <tr>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {RatioType["@Name"]}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {keyratioinfo["@Year1"]}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {keyratioinfo["@Year2"]}
                </th>
                <th
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  {keyratioinfo["@Year3"]}
                </th>
              </tr>
              {RatioType.Ratio.map((Ratio, idx) => (
                <tr key={idx}>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {Ratio["RatioName"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {Ratio["Year1"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {Ratio["Year2"]}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {Ratio["Year3"]}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default KeyRatio;
