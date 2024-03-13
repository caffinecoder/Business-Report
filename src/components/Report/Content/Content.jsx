import React from "react";
import Table from "@mui/joy/Table";
import {
  leftTdItem,
  rightTdItem,
  contactInfo,
  executivSummaryInfo,
  capitalInfoLeft,
  capitalInfoRight,
  shareHolderInfo,
} from "./TableData";
import BasicDetails from "./BasicDetails";
import ContactDetails from "./ContactDetails";
import ExecutiveSummary from "./ExecutiveSummary";
import CapitalStructure from "./CapitalStructure";
import ShareHolders from "./ShareHolders";
import Directors from "./Directors";
import KeyPersonnel from "./KeyPersonnel";
import BusinessOperations from "./BusinessOperations";
import Banker from "./Banker";
import Hypothecation from "./Hypothecation";
import Auditor from "./Auditor";
import FinancialSummary from "./FinancialSummary";
import BalanceSheet from "./BalanceSheet";
import ProfitLoss from "./ProfitLoss";
import Borrowings from "./Borrowings";
import CurrentLiabilities from "./CurrentLiabilities";
import AssetsDetails from "./AssetsDetails";
import KeyRatio from "./KeyRatio";
const Content = () => {
  return (
    <div>
      <section className="content">
        <div className="container">
          <div id="content">
            <ol className="py-5">
              {/* <li>
                <a
                  href="#Promise-Basics"
                  className="grid grid-cols-[auto,max-content] items-end"
                >
                  <span className="text-xl font-semibold mb-2 inline-block text-blue-700">
                    1. Promise Basics
                    <span className="after:absolute"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="pl-4">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end"
                    >
                      <span className="text-lg text-blue-700 font-normal">
                        1.1. The Promise Lifecycle
                        <span className="leaders" aria-hidden="true"></span>
                      </span>
                      <span
                        data-href="#Promise-Basics-The-Promise-Lifecycle"
                        className="page"
                      >
                        <span className="visually-hidden">Page&nbsp;</span>17
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end"
                    >
                      <span className="text-lg text-blue-700 font-normal">
                        1.2. Creating New (Unsettled) Promises
                        <span className="leaders" aria-hidden="true"></span>
                      </span>
                      <span
                        data-href="#Promise-Basics-Creating-New-Unsettled-Promises"
                        className="page"
                      >
                        <span className="visually-hidden">Page&nbsp;</span>21
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end"
                    >
                      <span className="text-lg text-blue-700 font-normal">
                        1.3. Creating Settled Promises
                        <span className="leaders" aria-hidden="true"></span>
                      </span>
                      <span
                        data-href="#Promise-Basics-Creating-Settled-Promises"
                        className="page"
                      >
                        <span className="visually-hidden">Page&nbsp;</span>24
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end"
                    >
                      <span className="text-lg text-blue-700 font-normal">
                        1.4. Summary
                        <span className="leaders" aria-hidden="true"></span>
                      </span>
                      <span
                        data-href="#Promise-Basics-Summary"
                        className="page"
                      >
                        <span className="visually-hidden">Page&nbsp;</span>27
                      </span>
                    </a>
                  </li>
                </ol>
              </li> */}
            </ol>
            <BasicDetails />
            <ContactDetails />
            <ExecutiveSummary />
            <CapitalStructure />
            <ShareHolders />
            <Directors />
            <KeyPersonnel />
            <BusinessOperations />
            <Banker />
            <Hypothecation />
            <Auditor />
            <FinancialSummary />
            <BalanceSheet />
            <ProfitLoss />
            <Borrowings />
            <CurrentLiabilities/>
            <AssetsDetails/>
            <KeyRatio/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
