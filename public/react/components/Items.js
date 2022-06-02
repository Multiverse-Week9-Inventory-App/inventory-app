import React, { useState } from "react";

import apiURL from "../api";

export function Items(props) {
  const [nameClicked, setNameClicked] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  const [description, setDescription] = useState(props.item.description);
  const [category, setCategory] = useState(props.item.category);
  const [image, setImage] = useState(props.item.image);
  const [price, setPrice] = useState(props.item.price);

  // Delete an item using ID
  const handleDelete = async () => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: "DELETE",
    });
    const data = await res.json();
 
    props.setUpdateItem(!props.updateItem);
    setNameClicked(false)
  };

  const handleUpdate = async () => {
    const res = await fetch(`${apiURL}/items/${props.item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        image: image,
        price: price,
      }),
    });

    const data = await res.json();
    props.setItems(data);
    props.setUpdateItem(!props.updateItem);
  };

  const itemData = (
    <div>
      <img src={image} alt={title} />

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Title"
          required
        />
        <input
          type="textarea"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          required
        />
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="Category"
          required
        />
        <input
          type="text"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          placeholder="image.jpg"
          required
        />
        <input
          type="number"
          min="0.00"
          step="0.01"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          placeholder="0.00"
          required
        />
        <button type="submit">Update Item</button>
      </form>

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
          {title}
        </button>
      </h3>
      {nameClicked && itemData}
    </>
  );
}
