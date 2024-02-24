import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/App.css";
import ListItem from "./ListItem";

function App() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setData(response.data);
      localStorage.setItem("data", JSON.stringify(response.data));
    } catch (error) {
      console.log("Too many calls", error);
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) setData(JSON.parse(savedData));
    else fetchData();
  }, []);
  return (
    <table id="data_table">
      <tbody>
        {data.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default App;
