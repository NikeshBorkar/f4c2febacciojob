import React from "react";

function ListItem({ item }) {
  return (
    <tr>
      <td>
        <img src={item.image} alt={item.name} />
        {item.name}
      </td>
      <td>{item.symbol.toUpperCase()}</td>
      <td>${item.current_price}</td>
      <td>${item.fully_diluted_valuation.toLocaleString()}</td>
      <td
        style={{
          color:
            item.market_cap_change_percentage_24h >= 0
              ? "rgb(8, 248, 8)"
              : "red",
        }}
      >
        {item.market_cap_change_percentage_24h.toFixed(2)}%
      </td>
      <td>Mkt Cap : ${item.market_cap.toLocaleString()}</td>
    </tr>
  );
}

export default ListItem;
