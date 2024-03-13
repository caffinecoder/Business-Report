import React from 'react'
import { leftTdItem, rightTdItem } from './TableData'
import Table from "@mui/joy/Table";
const BasicDetails = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300-">
    <div className="bg-[#1a3d73] py-2 px-2">
      <h2 className="text-lg font-semibold uppercase">
        Basic Details
      </h2>
    </div>
    <Table borderAxis="both">
      <tbody>
        {leftTdItem.map((item, idx) => (
          <tr key={idx}>
            <td
              style={{
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {item.label}
            </td>
            <td
              style={{
                fontSize: "1rem",
                borderLeft: "none",
                color: "#000",
                fontWeight: "500",
              }}
            >
              {item.labelData}
            </td>
            {rightTdItem[idx] && (
              <>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {rightTdItem[idx].label}
                </td>
                <td
                  style={{
                    borderLeft: "none",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {rightTdItem[idx].labelData}
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}

export default BasicDetails
