import React, { useContext } from "react";
import Table from "@mui/joy/Table";
import { contactInfo } from "./TableData";
import { DataContext } from "../../context/DataProvider";
const ContactDetails = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const contactDetails = data?.orderResult?.UCS?.RegisteredAddress;
  return (
    <div className=" overflow-hidden border  mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Contact Details</h2>
      </div>
      <Table borderAxis="both">
        <tbody>
          {Object.entries(contactDetails).map(
            ([key, value]) =>
              (key === "Address" ||
                key === "Phone" ||
                key === "Fax" ||
                key === "Email" ||
                key === "Website") &&
              value && (
                <tr key={key}>
                  <td
                    style={{
                      width: "30%",
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {key}
                  </td>
                  <td
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1rem",
                    }}
                  >
                    {value}
                  </td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ContactDetails;
