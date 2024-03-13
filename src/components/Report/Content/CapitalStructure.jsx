import React from 'react'
import Table from "@mui/joy/Table";
import { capitalInfoLeft,capitalInfoRight } from './TableData';
const CapitalStructure = () => {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-300 mt-5">
    <div className="bg-[#1a3d73] py-2 px-2">
      <h2 className="text-lg font-semibold uppercase">
        Capital Structure / Ownership
      </h2>
    </div>
    <Table borderAxis="both">
      <tbody>
        {capitalInfoLeft.map((item, idx) => (
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
                color: "#000",
                fontWeight: "500",
                fontSize: "1rem",
              }}
            >
              {item.labelData}
            </td>
            {capitalInfoRight[idx] && (
              <>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {capitalInfoRight[idx].label}
                </td>
                <td
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1rem",
                  }}
                >
                  {capitalInfoRight[idx].labelData}
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

export default CapitalStructure
