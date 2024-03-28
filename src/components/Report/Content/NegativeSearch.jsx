import { Table } from "@mui/joy";
import React, { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const NegativeSearch = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const banker = data?.orderResult?.UCS?.Bankers?.Banker;

  return (
    <div className="overflow-hidden border mt-5">
      <div className="bg-[#1a3d73] py-2 px-2">
        <h2 className="text-lg font-semibold uppercase">Negative Search</h2>
      </div>
      <Table borderAxis="both"></Table>
    </div>
  );
};

export default NegativeSearch;
