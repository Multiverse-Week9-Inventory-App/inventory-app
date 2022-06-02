import React from "react";
import { Items } from "./Items";
import { AddItem } from "./AddItem";

export function ItemsList({ items }) {
  return (
    <>
     <h2>Item List</h2>
      {items.map((item, idx) => {
        return <Items item={item} setItems={setItems} key={idx} />;
      })}
    </>
  );
}
