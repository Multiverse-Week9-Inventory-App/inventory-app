import React, { useState, useEffect } from "react";
import { Items } from "./Items";
import apiURL from "../api";

export function ItemsList() {
  const [items, setItems] = useState([]);


  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);


  return (
    <>
     <h2>Item List</h2>
      {items.map((item, idx) => {
        return <Items item={item} key={idx} />;
      })}
    </>
  );
}
