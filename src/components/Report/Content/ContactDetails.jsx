import React from "react";
import Table from "@mui/joy/Table";
import { contactInfo } from "./TableData";
const ContactDetails = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Contact Details</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {contactInfo.map((item, idx) => (
            <tr key={idx}>
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
                {item.labelData}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactDetails;
