import React from "react";
import { Link } from "react-router-dom";

const foodItems = [
  { name: "Waakye", id: 1 },
  { name: "Jollof", id: 2 },
  { name: "Fufu", id: 3 },
  { name: "Banku", id: 4 },
  { name: "Kenkey", id: 5 },
];

function Items() {
  return (
    <div>
      {foodItems.map((item) => {
        return (
          <Link key={item.id} to={`/items/${item.id}`}>
            <h1>{item.name}</h1>
          </Link>
          //   <Link to={"/items/" + item.id}>
          //     <h1>{item.name}</h1>
          //   </Link>
        );
      })}
    </div>
  );
}

export default Items;
