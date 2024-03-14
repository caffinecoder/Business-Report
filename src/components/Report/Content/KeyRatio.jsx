import React from "react";
import { Table } from "@mui/joy";
import { KeyRatioData } from "./TableData";
import { EfficiecyRatioData, ProfitabilityRatioData } from "./TableData";
const KeyRatio = () => {
  let showContent = false;

  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">KEY RATIOS</h2>
      </div>
      <Table borderAxis="both">
        <thead>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              For the Year Ending
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2023
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2022
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2021
            </th>
          </tr>
        </thead>
        <tbody>
          {KeyRatioData.map((item, idx) => {
            if (
              item.label === "Quick Ratio" ||
              item.label === "Interest Coverage Ratio"
            ) {
              showContent = true;
            }

            return (
              <React.Fragment key={idx}>
                <tr>
                  {item.label === "Leverage Ratios" ? (
                    <>
                      <th
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                          backgroundColor: "#eee",
                        }}
                      >
                        {item.label}
                      </th>
                      <th
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                          backgroundColor: "#eee",
                        }}
                      >
                        {item.year2023}
                      </th>
                      <th
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                          backgroundColor: "#eee",
                        }}
                      >
                        {item.year2023}
                      </th>
                      <th
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                          backgroundColor: "#eee",
                        }}
                      >
                        {item.year2022}
                      </th>
                    </>
                  ) : (
                    <>
                      <td
                        style={{
                          width: "30%",
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.label}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2021}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2022}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2021}
                      </td>
                    </>
                  )}
                </tr>
                {showContent && item.label === "Quick Ratio" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4" style={{borderRight: '1px solid #333'}}>
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Current Ratio -
                        </span>
                        The operating profit margin ratio is a measure of
                        overall operating efficiency of a company. It is
                        expressed as a percentage of sales and shows the
                        efficiency of a company for controlling the costs and
                        expenses associated with business operations.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Quick Ration -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                    </td>
                  </tr>
                )}
                {showContent && item.label === "Interest Coverage Ratio" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4" style={{borderRight: '1px solid #333'}}>
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Ratio -
                        </span>
                        A ratio that indicates what proportion of debt a company
                        has relative to its assets. A debt ratio of greater than
                        1 indicates that a company has more debt than assets.
                        The debt ratio can help investors determine a company's
                        level of risk.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Equity Ratio -
                        </span>
                        The debt-to-equity ratio is a measure of the
                        relationship between the short term & long term debts
                        and the capital contributed by shareholders. A ratio of
                        1:1 is usually considered to be satisfactory ratio.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Current Liabilities /Net Worth -
                        </span>
                        This ratio indicate the amount due to creditors within a
                        year as a percentage of the owners or stockholders
                        investment. The smaller the net worth, larger the
                        liabilities, resulting in less security for creditors.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Fixed Asset/ Net Worth -
                        </span>
                        The ratio indicates the extent to which shareholder's
                        funds are invested into the fixed assets. If this ratio
                        is unusually large, a company may be overinvested in
                        fixed assets and vice versa if it is small it may limit
                        the company's ability to produce profits. A ratio of .75
                        or higher is usually undesirable.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Interest Coverage Ratio -
                        </span>
                        A ratio used to determine how easily a company can pay
                        interest on outstanding debt. It measures the margin of
                        safety for the lenders. The higher the number, more
                        secure the lender is in respect of periodical interest
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
      <Table borderAxis="both">
        <thead>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              Efficiency Ratios
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2023
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2022
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2021
            </th>
          </tr>
        </thead>
        <tbody>
          {EfficiecyRatioData.map((item, idx) => {
            if (item.label === "Asset Turnover" || item.label === "") {
              showContent = true;
            }

            return (
              <React.Fragment key={idx}>
                <tr>
                  {item.label === "Profitability Ratios" ? (
                    <>
                      <th
                        style={{
                          color: "#000",
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                        colSpan="4" //Span all columns
                      >
                        {item.label}
                      </th>
                    </>
                  ) : (
                    <>
                      <td
                        style={{
                          width: "30%",
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.label}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2023}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2022}
                      </td>
                      <td
                        style={{
                          color: "#000",
                          fontWeight: "500",
                          fontSize: "1rem",
                        }}
                      >
                        {item.year2021}
                      </td>
                    </>
                  )}
                </tr>
                {showContent && item.label === "Asset Turnover" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4" style={{borderRight: '1px solid #333'}}>
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Average Collection Days -
                        </span>
                        The operating profit margin ratio is a measure of
                        overall operating efficiency of a company. It is
                        expressed as a percentage of sales and shows the
                        efficiency of a company for controlling the costs and
                        expenses associated with business operations.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Accounts Receivable Turnover -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Inventory Turnover -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Asset Turnover -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                    </td>
                  </tr>
                )}
                {showContent && item.label === "Interest Coverage Ratio" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4" style={{borderRight: '1px solid #333'}}>
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Ratio -
                        </span>
                        A ratio that indicates what proportion of debt a company
                        has relative to its assets. A debt ratio of greater than
                        1 indicates that a company has more debt than assets.
                        The debt ratio can help investors determine a company's
                        level of risk.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Equity Ratio -
                        </span>
                        The debt-to-equity ratio is a measure of the
                        relationship between the short term & long term debts
                        and the capital contributed by shareholders. A ratio of
                        1:1 is usually considered to be satisfactory ratio.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Current Liabilities /Net Worth -
                        </span>
                        This ratio indicate the amount due to creditors within a
                        year as a percentage of the owners or stockholders
                        investment. The smaller the net worth, larger the
                        liabilities, resulting in less security for creditors.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Fixed Asset/ Net Worth -
                        </span>
                        The ratio indicates the extent to which shareholder's
                        funds are invested into the fixed assets. If this ratio
                        is unusually large, a company may be overinvested in
                        fixed assets and vice versa if it is small it may limit
                        the company's ability to produce profits. A ratio of .75
                        or higher is usually undesirable.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Interest Coverage Ratio -
                        </span>
                        A ratio used to determine how easily a company can pay
                        interest on outstanding debt. It measures the margin of
                        safety for the lenders. The higher the number, more
                        secure the lender is in respect of periodical interest
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
      <Table borderAxis="both">
        <thead>
          <tr>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              Profitability Ratios
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2023
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2022
            </th>
            <th
              style={{
                color: "#000",
                fontWeight: "600",
                fontSize: "1rem",
                backgroundColor: "#eee",
              }}
            >
              31-Mar-2021
            </th>
          </tr>
        </thead>
        <tbody>
          {ProfitabilityRatioData.map((item, idx) => {
            if (item.label === "Return On Equity") {
              showContent = true;
            }

            return (
              <React.Fragment key={idx}>
                <tr>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.label}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2023}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2022}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {item.year2021}
                  </td>
                </tr>
                {showContent && item.label === "Return On Equity" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4" style={{borderRight: '1px solid #333'}}>
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Operating Profit Margin -
                        </span>
                        The operating profit margin ratio is a measure of
                        overall operating efficiency of a company. It is
                        expressed as a percentage of sales and shows the
                        efficiency of a company for controlling the costs and
                        expenses associated with business operations.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Net Profit Margin -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Return on Total Assets -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Return on Equity -
                        </span>
                        Net Profit Margin ratio is calculated by dividing net
                        profit by operating income. It measures how much out of
                        every unit of sales a company actually earns profit. The
                        higher the ratio the better.
                      </p>
                    </td>
                  </tr>
                )}
                {showContent && item.label === "Interest Coverage Ratio" && (
                  <tr key={`${idx}-content`}>
                    <td colSpan="4">
                      <p className="text-base font-normal mt-3 mb-5">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Ratio -
                        </span>
                        A ratio that indicates what proportion of debt a company
                        has relative to its assets. A debt ratio of greater than
                        1 indicates that a company has more debt than assets.
                        The debt ratio can help investors determine a company's
                        level of risk.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Debt Equity Ratio -
                        </span>
                        The debt-to-equity ratio is a measure of the
                        relationship between the short term & long term debts
                        and the capital contributed by shareholders. A ratio of
                        1:1 is usually considered to be satisfactory ratio.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Current Liabilities /Net Worth -
                        </span>
                        This ratio indicate the amount due to creditors within a
                        year as a percentage of the owners or stockholders
                        investment. The smaller the net worth, larger the
                        liabilities, resulting in less security for creditors.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Fixed Asset/ Net Worth -
                        </span>
                        The ratio indicates the extent to which shareholder's
                        funds are invested into the fixed assets. If this ratio
                        is unusually large, a company may be overinvested in
                        fixed assets and vice versa if it is small it may limit
                        the company's ability to produce profits. A ratio of .75
                        or higher is usually undesirable.
                      </p>
                      <p className="text-base font-normal mb-3">
                        <span className="font-semibold text-base text-black whitespace-nowrap mr-2">
                          Interest Coverage Ratio -
                        </span>
                        A ratio used to determine how easily a company can pay
                        interest on outstanding debt. It measures the margin of
                        safety for the lenders. The higher the number, more
                        secure the lender is in respect of periodical interest
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default KeyRatio;
