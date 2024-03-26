import React from "react";
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
import ConsolidateBalance from "./ConsolidateBalance";
import ConsolidateProfitLoss from "./ConsolidateProfitLoss";
import LinkedCompanies from "./LinkedCompanies";
import CreditRecommendation from "./CreditRecommendation";
const Content = () => {
  return (
    <div>
      <section className="content">
        <div className="container">
          <div id="content">
            <ol className="toc-list" role="list">
              <li>
                <a href="#Promise-Basics">
                  <span className="title text-lg font-semibold inline-block text-blue-700">
                    1. Overview
                    <span className="leaders"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="toc-list pl-5">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
                        1.1. Basic Details
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light">
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
              </li>
              <li>
                <a href="#Promise-Basics">
                  <span className="title text-lg font-semibold inline-block text-blue-700">
                    2. Promise Basics
                    <span className="leaders"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="toc-list pl-5">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light">
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
              </li>
              <li>
                <a href="#Promise-Basics">
                  <span className="title text-lg font-semibold inline-block text-blue-700">
                    3. Promise Basics
                    <span className="leaders"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="toc-list pl-5">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light">
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
              </li>
              <li>
                <a href="#Promise-Basics">
                  <span className="title text-lg font-semibold inline-block text-blue-700">
                    4. Promise Basics
                    <span className="leaders"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="toc-list pl-5">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light">
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
              </li>
              <li>
                <a href="#Promise-Basics">
                  <span className="title text-lg font-semibold inline-block text-blue-700">
                    5. Promise Basics
                    <span className="leaders"></span>
                  </span>
                  <span data-href="#Promise-Basics" className="page">
                    <span className="visually-hidden">Page&nbsp;</span>9
                  </span>
                </a>
                <ol className="toc-list pl-5">
                  <li>
                    <a
                      href="#Promise-Basics"
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light relative">
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
                      className="grid grid-cols-[auto,max-content] items-end mb-2"
                    >
                      <span className="title text-base text-blue-700 font-light">
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
              </li>
            </ol>
            <BasicDetails />
            <ContactDetails />
            <ExecutiveSummary />
            <CreditRecommendation/>
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
            <CurrentLiabilities />
            <AssetsDetails />
            <KeyRatio />
            <ConsolidateBalance />
            <ConsolidateProfitLoss />
            <LinkedCompanies />
          </div>
          <div className="mt-5">
            <p className="text-base italic">
              This report is based on information from sources believed to be
              true. Any advice or recommendation in this report has been given
              without specific investment objectives and the particular needs of
              any specific addressee. It must be distinctly understood that
              though utmost care has been exercised to obtain reports of a
              reliable character but we accept no liability whatsoever for any
              direct or consequential loss arising from any use of this
              document.
            </p>
            <span className="block text-center text-2xl font-semibold mt-5">
              ***END OF REPORT***
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
