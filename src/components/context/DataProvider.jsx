import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { fetchData } from "../data/fetchJsonData";
import { createContext } from "react";
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const jsonData = await fetchData();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchDataAsync();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
