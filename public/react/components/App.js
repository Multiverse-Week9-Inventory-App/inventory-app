import React, { useState } from "react";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

// import and prepend the api url to any fetch calls

export function App() {
  const [addClicked, setAddClicked] = useState(false)
  const [updateClick, setUpdateClick] = useState(false)

  return (
    <main>
      <h1>Item Store</h1>
      <div><button type="button" className="btn btn-primary"onClick={() => {setAddClicked(!addClicked)}}>Add an Item</button></div>
      {!addClicked && <ItemsList />}
      {addClicked && <AddItem setAddClicked={setAddClicked} />}
      {updateClick && <UpdateItem setUpdateClick={setUpdateClick}/>}
    </main>
  );
}
