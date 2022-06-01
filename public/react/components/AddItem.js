import React, { useState } from "react";
import apiURL from "../api";

export function AddItem({ setAddClicked }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async () => {
    e.preventDefault();
    const createRes = await fetch(`${apiURL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        image: image,
        price: price,
      }),
    })
    if (createRes) console.log("I'm done creating!!!")
      
    setTitle("");
    setDescription("");
    setCategory("");
    setImage("");
    setPrice(0);
    setAddClicked(false)
  };

  return (
    <>
      <section id="controls">
        <h3>Add An Item</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
            required
          />
          <input
            type="textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
            required
          />
          <input
            type="text"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            placeholder="category"
            required
          />
          <input
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="image"
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
            placeholder="price"
            required
          />
          <button type="submit">Submit Item</button>
        </form>
      </section>
    </>
  );
}
