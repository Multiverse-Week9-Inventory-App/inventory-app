import React, { useState } from "react";

export function AddItem() {
const [title,setTitle] = useState('')
const [description, setDescription] = useState('')
const [category,setCategory] = useState('')
const [image,setImage] = useState('')
const [price,setPrice] = useState(0)

 const handleSubmit = () => {
    e.preventDefault()

}

  return (
    <>
    <section id="controls">
      <h3>Add An Item</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='title' required/>
        <input type='textarea' value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder='description' required/>
        <input type='text' value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder='category' required/>
        <input type='text' value={image} onChange={(e)=>{setImage(e.target.value)}} placeholder='image' required/>
        <input type='number' min='0.00' step='0.01' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='price' required/>
      </form>
      <button type='submit' >Submit Item</button>
      </section>
    </>
  );
}
