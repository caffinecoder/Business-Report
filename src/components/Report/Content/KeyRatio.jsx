import React, { useContext } from "react";
import { Table } from "@mui/joy";
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
                <React.Fragment key={idx}>
                  <tr>
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
                  {Ratio["RatioName"] === "Quick Ratio" && ( // Conditionally render additional information below Quick Ratio
                    <tr>
                      <td colSpan="4">
                        <div className="my-2">
                          <p className="mb-2 text-base">
                            <span className="text-black text-base font-semibold">
                              Current Ratio -
                            </span>
                            A measure of short term solvency i.e. ability to
                            meet the short term obligations by matching current
                            assets against current liabilities. Ideal current
                            ratio is 2 : 1 (2.0). However, a very high ratio
                            indicates availability of idle cash and is not a
                            good sign.
                          </p>
                          <p className="text-base">
                            <span className="text-black text-base font-semibold">
                              Quick Ratio -
                            </span>
                            A measure of the amount of liquid assets available
                            to offset current liabilities. The ratio is 1:1
                            (1.0), the business is said to be in a liquid
                            condition. The larger the ratio, the greater the
                            liquidity.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                  {Ratio["RatioName"] === "Interest Coverage Ratio" && (
                    <tr>
                      <td colSpan={4}>
                        <div className="my-2">
                          <p className="mb-2 text-base">
                            <span className="text-black text-base font-semibold">
                              Debt Ratio -
                            </span>
                            A ratio that indicates what proportion of debt a
                            company has relative to its assets. A debt ratio of
                            greater than 1 indicates that a company has more
                            debt than assets. The debt ratio can help investors
                            determine a company's level of risk.
                          </p>
                          <p className="text-base">
                            <span className="text-black text-base font-semibold">
                              Debt Equity Ratio -
                            </span>
                            The debt-to-equity ratio is a measure of the
                            relationship between the short term & long term
                            debts and the capital contributed by shareholders. A
                            ratio of 1:1 is usually considered to be
                            satisfactory ratio.
                          </p>
                          <p className="text-base">
                            <span className="text-black text-base font-semibold">
                              Current Liabilities /Net Worth -
                            </span>
                            This ratio indicate the amount due to creditors
                            within a year as a percentage of the owners or
                            stockholders investment. The smaller the net worth,
                            larger the liabilities, resulting in less security
                            for creditors.
                          </p>
                          <p className="text-base">
                            <span className="text-black text-base font-semibold">
                              Fixed Asset/ Net Worth -
                            </span>
                            The debt-to-equity ratio is a measure of the
                            relationship between the short term & long term
                            debts and the capital contributed by shareholders. A
                            ratio of 1:1 is usually considered to be
                            satisfactory ratio.
                          </p>
                          <p className="text-base">
                            <span className="text-black text-base font-semibold">
                              Interest Coverage Ratio -
                            </span>
                            A ratio used to determine how easily a company can
                            pay interest on outstanding debt. It measures the
                            margin of safety for the lenders. The higher the
                            number, more secure the lender is in respect of
                            periodical interest.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                  {Ratio["RatioName"] === "Asset Turnover" && (
                    <tr>
                      <td colSpan={4}>
                        <div className="my-2">
                          <p className="mb-2 text-base">
                            <span className="text-black text-base font-semibold">
                              Average Collection Days -
                            </span>
                            The approximate amount of time that it takes for a
                            business to receive payments owed, in terms of
                            receivables, from its customers and clients.
                            Possessing a lower average collection period is seen
                            as optimal.
                          </p>
                          <p className="mb-2 text-base">
                            <span className="text-black text-base font-semibold">
                              Accounts Receivable Turnover -
                            </span>
                            The accounting measure used to quantify a firm's
                            effectiveness in extending credit as well as
                            collecting debts. A high ratio implies either that a
                            company operates on a cash basis or that its
                            extension of credit and collection of accounts
                            receivable is efficient.
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                  {Ratio["RatioName"] === "Return On Equity" && (
                    <tr>
                      <td colSpan={4}>
                        <div>
                          <p>
                            HI
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default KeyRatio;
