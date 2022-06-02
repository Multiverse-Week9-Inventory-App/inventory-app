import React, { useState } from "react";

import apiURL from "../api";

export function Items(props) {
  const [nameClicked, setNameClicked] = useState(false);

  // Delete an item using ID
  const handleDelete = async () => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: "DELETE"
    });
    const data = await res.json();
    props.setItems(data);
    props.setUpdateItem(!props.updateItem)
  }

  const itemData = (
    <div>
      <p> {props.item.description}</p>
      <p>{props.item.category}</p>
      <img src={props.item.image} alt={props.item.title} />
      <p>{props.item.price}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );

  return (
    <>
      <h3>
        <button
          onClick={() => {
            setNameClicked(!nameClicked);
          }}
        >
          {props.item.title}
        </button>
      </h3>
      {nameClicked && itemData}
    </>
  );
}
