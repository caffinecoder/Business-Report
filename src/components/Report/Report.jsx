import React from "react";
import Content from "./Content/Content";
const Report = () => {
  return (
    <div>
      <div className="fixed top-0 w-full px-2 bg-white text-center z-50">
        <header className="header">
          <div className="container">
            <div className="flex items-center justify-between border-b border-black pt-8 pb-3">
              <div className="max-w-[180px] w-full">
                <img
                  className="w-full"
                  src="https://kreditaid.com/assets/website/kreditaid.png"
                  alt="company-logo"
                />
              </div>
              <p className="text-2xl font-bold text-black uppercase">
                Reliance Industries limited
              </p>
            </div>
          </div>
        </header>
      </div>
      <div className="container py-5 border-b border-gray-900 pt-28">
        <h2 className="text-center text-2xl font-bold pt-2">
          TABLE OF CONTENT
        </h2>
      </div>
      <div className="mb-32">
        <Content />
      </div>
      <div className="fixed bottom-0 w-full px-2 bg-white text-center z-50">
        <footer className="footer">
          <div className="container">
            <div className="flex items-center justify-between border-t border-black pt-5 pb-8">
              <p>&#169; Unified Credit Solution</p>
              <p>Prepared on: 04-05-2023</p>
              <p>1/20</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Report;
