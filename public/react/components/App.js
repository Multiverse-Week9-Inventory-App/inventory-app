import React, { useState } from "react";

import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

// import and prepend the api url to any fetch calls

export function App() {
  const [addClicked, setAddClicked] = useState(false)

  return (
    <main>
      <h1>Item Store</h1>
      <div><button onClick={() => {setAddClicked(!addClicked)}}>Add an Item</button></div>
      {!addClicked && <ItemsList />}
      {addClicked && <AddItem setAddClicked={setAddClicked} />}
    </main>
  );
}
