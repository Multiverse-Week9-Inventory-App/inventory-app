import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export function App() {
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
    <main>
      <h1>Item Store</h1>
      <Routes>
        <Route exact path="/" element={<ItemsList items={items} />} />
        <Route exact path="/add" element={<AddItem />} />
      </Routes>
    </main>
  );
}
