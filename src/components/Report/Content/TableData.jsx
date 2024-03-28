// ________________________________________________||Table-Data||_______________________________________________________
const basicDetails = (label, labelData) => ({ label, labelData });
export const leftTdItem = [
  basicDetails("Prepared By", ": Unified Credit Solutions Pvt Ltd"),
  basicDetails("Prepared For", ": Dev.pro"),
  basicDetails("Prepared On ", ": Hindustan Aeronautics Limited"),
];
export const rightTdItem = [
  basicDetails("Your Order/Ref.", ": KA012410942"),
  basicDetails("Type of Report", ": Online Report"),
  basicDetails("Supplied on ", ": 16-Jan-2024"),
];

const contactDetails = (label, labelData) => ({ label, labelData });
export const contactInfo = [
  contactDetails(
    "Email",
    "cosec@hal-india.co.in , marketing@hal-india.com , root@bnghal.kar.nic.in , cosec@hal-india.com; cosec@hal-india.co.in"
  ),
  contactDetails("Phone", " +91 8022866001 / 22320701"),
  contactDetails("Website ", "www.hal-india.co.in"),
  contactDetails(
    "Regd./Business Address ",
    "15/1, Cubbon Road,Post Box No.5150 Bangalore - 560001 Karnataka India "
  ),
];

const executiveSummary = (label, labelData) => ({ label, labelData });
export const executivSummaryInfo = [
  executiveSummary("Report ID", "50096"),
  executiveSummary("Company Name", "HINDUSTAN AERONAUTICS LIMITED"),
  executiveSummary("Company Status ", "Active"),
  executiveSummary("Legal Form  ", "Public Limited Company"),
  executiveSummary("Regd./Formation Date ", "16-Aug-1963"),
  executiveSummary("Incorporation No. ", "L35301KA1963GOI001622"),
  executiveSummary("PAN No. ", "AAACH3641R"),
  executiveSummary("GSTIN", "29AAACH3641R1Z3"),
  executiveSummary("No. of Employees", "26432"),
  executiveSummary(
    "Business Activity",
    "Engaged in manufacturing of defence equipment's."
  ),
];

const capitalStructure = (label, labelData) => ({ label, labelData });
export const capitalInfoLeft = [
  capitalStructure("Authorised Capital", "6,000,000,000.00"),
];
export const capitalInfoRight = [
  capitalStructure("Paid up Capital", "3,343,875,000.00"),
];

const shareHolders = (label, country, shares, holding) => ({
  label,
  country,
  shares,
  holding,
});
export const shareHolderInfo = [
  shareHolders("President Of India", " ", "479102424.00", "71.64"),
  shareHolders("Hdfc Trustee Company Ltd", " ", "479102424.00", "71.64"),
  shareHolders(
    "Life Insurance Corporation Of India",
    " ",
    "479102424.00",
    "71.64"
  ),
  shareHolders("Government Of Singapore", " ", "479102424.00", "71.64"),
];

const directors = (name, designation, joining, din) => ({
  name,
  designation,
  joining,
  din,
});
export const directorsInfo = [
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
  directors("Deepak Abasaheb Shinde", "Director ", "28-Apr-2022", "00288460"),
];

const personnel = (name, designation, joining) => ({
  name,
  designation,
  joining,
});

export const personnelInfo = [
  personnel("Ananthakrishnan Chinakavanam Bhoopathi", "CFO ", "28-Apr-2022"),
  personnel("Ananthakrishnan Chinakavanam Bhoopathi", "CFO ", "28-Apr-2022"),
];

const banker = (name, bankAddress) => ({
  name,
  bankAddress,
});
export const bankerDetails = [
  banker(
    "State Bank of India",
    "Industrial Finance Branch, Residency Plaza, Residency Road, Bangalore - 560025, Karnataka, India"
  ),
  banker("Bank of Baroda", ""),
  banker("State Bank of India", ""),
  banker("Export Import Bank of Ind", ""),
  banker("Indian Bank", ""),
];

const Hypothecation = (label, labelData) => ({
  label,
  labelData,
});
export const HypothecationData = [
  Hypothecation("Charge Holder", "State Bank Of India"),
  Hypothecation("Date of Creation", " 28-Aug-2007"),
  Hypothecation("Date of Modification ", "11-Oct-2021"),
  Hypothecation("Amount", "60,500,000,000.00"),
  Hypothecation("Charge ID", "10070823"),
];

const Auditor = (label, labelData) => ({
  label,
  labelData,
});
export const AuditorData = [
  Auditor("Name", "A John Moris & Co"),
  Auditor("AuditorDesignation", "Chartered Accountants"),
  Auditor("Address", "Bangalore, Karnataka, India"),
  Auditor("FRNo", "007220S"),
  Auditor("MembershipNo", "021183"),
  Auditor("UDIN No", "23021183BGTCQC1773"),
];

const Financial = (years, amount, change) => ({
  years,
  amount,
  change,
});
export const FinancialData = [
  Financial("31-Mar-2023", "235,061,700.00", "22.02%"),
  Financial("31-Mar-2022", "235,061,700.00", "22.02%"),
  Financial("31-Mar-2021", "235,061,700.00", "22.02%"),
];

const BalanceSheet = (label, year2023, year2022, year2021) => ({
  label,
  year2023,
  year2022,
  year2021,
});

export const BalanceData = [
  BalanceSheet("Period", "12 months", "12 months", "12 months"),
  BalanceSheet("Type Of Financial", "Standalone", "Standalone", "Standalone"),
  BalanceSheet("Account Type", "Audited", "Audited", "Audited"),
  BalanceSheet("Source", "Public", "Public", "Public"),
  BalanceSheet(
    "Shareholders' Funds",
    "235,061,700.00",
    "235,061,700.00",
    "235,061,700.00"
  ),
  BalanceSheet(
    "- Share Capital",
    "3,343,900.00",
    "3,343,900.00",
    "3,343,900.00"
  ),
  BalanceSheet(
    "- Other Equity",
    "231,717,800.00",
    "231,717,800.00",
    "231,717,800.00"
  ),
  BalanceSheet(
    "Non-current liabilities",
    "235,061,700.00",
    "235,061,700.00",
    "235,061,700.00"
  ),
  BalanceSheet(
    "- Other Financial Liabilities",
    "5,250,300.00",
    "5,250,300.00",
    "5,250,300.00"
  ),
  BalanceSheet(
    "- Long-term provisions",
    "13,329,400.00",
    "13,329,400.00",
    "13,329,400.00"
  ),
  BalanceSheet(
    "- Other Long term liabilities",
    "109,260,000.00",
    "109,260,000.00",
    "109,260,000.00"
  ),
  BalanceSheet(
    "Current liabilities",
    "235,061,700.00",
    "235,061,700.00",
    "235,061,700.00"
  ),
  BalanceSheet("- Short-term borrowings", "0.00", "0.00", "0.00"),
  BalanceSheet("- Trade payables", "Public", "Public", "Public"),
  BalanceSheet("- Other Financial Liabilities", "Public", "Public", "Public"),
  BalanceSheet("- Other current liabilities", "Public", "Public", "Public"),
  BalanceSheet("- Short-term provisions", "Public", "Public", "Public"),
  BalanceSheet("- Current Tax Liabilities (Net)", "Public", "Public", "Public"),
  BalanceSheet("TOTAL", "Public", "Public", "Public"),
  BalanceSheet(
    "- Fixed Assets",
    "87,112,100.00",
    "87,112,100.00",
    "87,112,100.00"
  ),
  BalanceSheet(
    "- Tangible assets",
    "57,915,600.00",
    "57,915,600.00",
    "57,915,600.00"
  ),
  BalanceSheet(
    "- Capital work-in-progress",
    "6,358,100.00",
    "6,358,100.00",
    "6,358,100.00"
  ),
  BalanceSheet("- Investment Property", "300.00", "300.00", "300.00"),
  BalanceSheet(
    "- Intangible assets",
    "10,357,400.00",
    "10,357,400.00",
    "10,357,400.00"
  ),
  BalanceSheet(
    "- Intangible assets under development",
    "12,481,000.00",
    "12,481,000.00",
    "12,481,000.00"
  ),
  BalanceSheet(
    "- Investments in Associates & Joint Ventures",
    "1,102,100.00",
    "1,102,100.00",
    "1,102,100.00"
  ),
  BalanceSheet(
    "- Investment Property",
    "1,102,100.00",
    "1,102,100.00",
    "1,102,100.00"
  ),
  BalanceSheet("- Long-term loans and advances", "Public", "Public", "Public"),
  BalanceSheet("- Non-current Financial Assets", "Public", "Public", "Public"),
  BalanceSheet("- Deferred tax assets(net)", "Public", "Public", "Public"),
  BalanceSheet("- Other non-current assets", "Public", "Public", "Public"),
  BalanceSheet("- Inventories", "Public", "Public", "Public"),
  BalanceSheet("- Trade receivables", "Public", "Public", "Public"),
  BalanceSheet("- Other --", "Public", "Public", "Public"),
  BalanceSheet("- Cash and cash equivalents", "Public", "Public", "Public"),
  BalanceSheet("- Bank balance other than above", "Public", "Public", "Public"),
  BalanceSheet("- Short-term loans and advances", "Public", "Public", "Public"),
  BalanceSheet(
    "- Other Current Financial Assets",
    "Public",
    "Public",
    "Public"
  ),
  BalanceSheet("- Current Tax Assets (Net)", "Public", "Public", "Public"),
  BalanceSheet("- Other current assets", "Public", "Public", "Public"),
  BalanceSheet(
    "- Assets classified as held for sale",
    "Public",
    "Public",
    "Public"
  ),
  BalanceSheet("TOTAL", "Public", "Public", "Public"),
];

const ProfitLoss = (label, year2023, year2022, year2021) => ({
  label,
  year2023,
  year2022,
  year2021,
});
export const ProfitLossData = [
  ProfitLoss("Revenue", "269,278,500.00", "269,278,500.00 ", "269,278,500.00 "),
  ProfitLoss(
    "- Revenue from operations",
    "269,278,500.00",
    "269,278,500.00 ",
    "269,278,500.00 "
  ),
  ProfitLoss(
    "- Other income",
    "16,718,000.00",
    "16,718,000.00 ",
    "16,718,000.00 "
  ),
  ProfitLoss(
    "Expenses",
    "269,278,500.00",
    "269,278,500.00 ",
    "269,278,500.00 "
  ),
  ProfitLoss(
    "- Cost of materials consumed",
    "100,102,600.00",
    "100,102,600.00 ",
    "100,102,600.00 "
  ),
  ProfitLoss(
    "- Purchase of Stock-in-Trade",
    "7,991,500.00",
    "7,991,500.00 ",
    "7,991,500.00 "
  ),
  ProfitLoss(
    "- Changes in inventories of finished goods ",
    "5,922,900.00",
    "5,922,900.00 ",
    "5,922,900.00 "
  ),
  ProfitLoss(
    "- Employee benefits expense",
    "48,958,900.00",
    "48,958,900.00 ",
    "48,958,900.00 "
  ),
  ProfitLoss(
    "- Finance Cost",
    "48,958,900.00",
    "48,958,900.00 ",
    "48,958,900.00 "
  ),
  ProfitLoss(
    "- Depreciation and amortization expense",
    "48,958,900.00",
    "48,958,900.00",
    "48,958,900.00"
  ),
  ProfitLoss(
    "- Impairment gain / (loss) - net",
    "48,958,900.00",
    "48,958,900.00",
    "48,958,900.00"
  ),
  ProfitLoss(
    "- Other expenses",
    "48,958,900.00",
    "48,958,900.00",
    "48,958,900.00"
  ),
  ProfitLoss(
    "- Direct Expenses",
    "48,958,900.00",
    "48,958,900.00",
    "48,958,900.00"
  ),
  ProfitLoss("- Provisions", "48,958,900.00", "48,958,900.00", "48,958,900.00"),
  ProfitLoss(
    "- Less: Amount Transferred to Product",
    "48,958,900.00",
    "48,958,900.00",
    "48,958,900.00"
  ),
  ProfitLoss(
    "Profit before exceptional and extraordinary items and tax",
    "64,929,400.00",
    "64,929,400.00 ",
    "64,929,400.00 "
  ),
  ProfitLoss("Exceptional items", "Public", "Public ", "20,200.00 "),
  ProfitLoss(
    "Profit before extraordinary items and tax",
    "Public",
    "Public ",
    "Public "
  ),
  ProfitLoss("Profit (Loss) before tax", "Public", "Public ", "Public "),
  ProfitLoss("Tax Expenses", "Public", "Public ", "Public "),
  ProfitLoss("- Current tax", "Public", "Public ", "Public "),
  ProfitLoss("- Taxes", "Public", "Public ", "Public "),
  ProfitLoss("- Deferred tax", "Public", "Public ", "Public "),
  ProfitLoss(
    "Profit (Loss) for the period from continuing operations",
    "Public",
    "Public ",
    "Public "
  ),
  ProfitLoss("Profit (Loss) for the period", "Public", "Public ", "Public "),
  ProfitLoss("Earnings per equity share:Basic", "Public", "Public ", "Public "),
  ProfitLoss(
    "Earnings per equity share:Diluted",
    "Public",
    "Public ",
    "Public "
  ),
];

const Borrowing = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const BorrowingData = [
  Borrowing("From Banks", "0.00", "0.00 ", "0.00 "),
  Borrowing("From Banks - Commercial paper", "0.00", "0.00 ", "0.00 "),
  Borrowing("TOTAL", "0.00", "0.00 ", "90,700.00"),
];

const CurrentLib = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const CurrentLibData = [
  CurrentLib(
    "Advances from Customers",
    "55,398,100.00",
    "55,398,100.00",
    "55,398,100.00"
  ),
  CurrentLib(
    "Taxes ( Other than Taxes on Income)",
    "55,398,100.00",
    "55,398,100.00",
    "55,398,100.00"
  ),
  CurrentLib("Gst Payable", "0.00", "0.00 ", "90,700.00"),
  CurrentLib("Others", "0.00", "0.00 ", "90,700.00"),
  CurrentLib("TOTAL", "0.00", "0.00 ", "90,700.00"),
];

const Assets = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const AssetsData = [
  Assets(
    "Property, Plant and Equipment",
    "55,398,100.00",
    "55,398,100.00",
    "55,398,100.00"
  ),
  Assets(
    "Capital Work in Progress",
    "55,398,100.00",
    "55,398,100.00",
    "55,398,100.00"
  ),
  Assets("TOTAL", "0.00", "0.00 ", "90,700.00"),
];

const KeyRatio = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const KeyRatioData = [
  KeyRatio("Current Ratio", "1.68", "1.68", "1.68"),
  KeyRatio("Quick Ratio", "1.29", "1.29", "1.29"),
  KeyRatio("Leverage Ratios", "31-Mar-2023", "31-Mar-2022 ", "31-Mar-2021"),
  KeyRatio("Debt  Ratio", "1.68", "1.68", "1.68"),
  KeyRatio("Debt Equity Ratio", "1.29", "1.29", "1.29"),
  KeyRatio("Curr.Liab./Net Worth", "0.00", "0.00 ", "90,700.00"),
  KeyRatio("Fixed Asset/ Net Worth", "0.00", "0.00 ", "90,700.00"),
  KeyRatio("Interest Coverage Ratio", "0.00", "0.00 ", "90,700.00"),
];
const EfficiecyRatio = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const EfficiecyRatioData = [
  EfficiecyRatio("Average Collection Days", "63.97", "63.97 ", "63.97"),
  EfficiecyRatio("Account Receiv. Turnover", "63.97", "63.97 ", "63.97"),
  EfficiecyRatio("Average Payment Days", "63.97", "63.97 ", "63.97"),
  EfficiecyRatio("Inventory Turnover", "63.97", "63.97 ", "63.97"),
  EfficiecyRatio("Asset Turnover", "63.97", "63.97 ", "63.97"),
];
const ProfitabilityRatio = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const ProfitabilityRatioData = [
  ProfitabilityRatio("Operating Profit Margin", "63.97", "63.97 ", "63.97"),
  ProfitabilityRatio("Net Profit Margin", "63.97", "63.97 ", "63.97"),
  ProfitabilityRatio("Return on Total Assets", "63.97", "63.97 ", "63.97"),
  ProfitabilityRatio("Return On Equity", "63.97", "63.97 ", "63.97"),
];

const ConsolidatedBalSheet = (label, year2023, year2022, year2021) => {
  return { label, year2023, year2022, year2021 };
};
export const ConsolidatedBalData = [
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet(
    "Type Of Financial",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Account Type",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet("Source", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet(
    "Shareholders' Funds",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Share Capital",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Other Equity",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Non-controlling interest",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Non-current liabilities",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Other Financial Liabilities",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Long-term provisions",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "PeriOther Long term liabilitiesod",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Current liabilities",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Trade payables",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Other Financial Liabilities",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Other current liabilities",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Short-term provisions",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet(
    "Current Tax Liabilities (Net)",
    "3343900.00",
    "3343900.00",
    "3343900.00"
  ),
  ConsolidatedBalSheet("TOTAL", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
  ConsolidatedBalSheet("Period", "3343900.00", "3343900.00", "3343900.00"),
];
