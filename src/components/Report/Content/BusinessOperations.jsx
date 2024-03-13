import React from "react";
import Table from "@mui/joy/Table";
const BusinessOperations = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Business Operations</h2>
      </div>
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
          <td>
            <p>
              Hindustan Aeronautics Limited (HAL), was incorporated in 1963 by
              amalgamation of Hindustan Aircraft Limited and Aeronautics India
              Limited, is a Navratana Company. Government of India (GoI) holds
              majority stake of 89.97% following listing of shares on March 28,
              2018. HAL is into carrying out design, development, manufacture,
              repair and overhaul of aircraft, helicopter, engines and related
              systems like avionics, instruments and accessories primarily
              serving Indian defence programme. It also manufactures the
              structural parts of various Satellite Launch Vehicles of the
              Indian Space Research Organization (ISRO).HAL is into carrying out
              design, development, manufacture, repair and overhaul of aircraft,
              helicopter, engines and related systems like avionics, instruments
              and accessories primarily serving Indian defence programme. It
              also manufactures the structural parts of various Satellite Launch
              Vehicles of the Indian Space Research Organization (ISRO).
            </p>
          </td>
        </tbody>
      </Table>
    </div>
  );
};

export default BusinessOperations;
