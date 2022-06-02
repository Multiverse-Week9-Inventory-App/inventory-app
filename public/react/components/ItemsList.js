import React, { useState, useEffect } from "react";
import { Items } from "./Items";
import apiURL from "../api";

export function ItemsList() {
  const [items, setItems] = useState([]);
  const [updateItem,setUpdateItem] = useState(false)


  // Delete an item using ID
  const handleDelete = async (itemId) => {
    
    const res = await fetch(`${apiURL}/items/${itemId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setNameClicked(false)
    //props.setItems(data);
    setUpdateItem(!updateItem);
  };


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
  }, [updateItem]);


  return (
    <>
     <h2>Item List</h2>
      {items.map((item, idx) => {
        return <Items item={item} setItems={setItems} setUpdateItem={setUpdateItem} updateItem={updateItem} handleDelete={handleDelete} key={idx} />;
      })}
    </>
  );
}
