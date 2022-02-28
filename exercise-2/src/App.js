import Shoppinglist from './components/Shoppinglist'
import Title from './components/Title'
import Buttons from './components/Buttons'
import React from "react";
import { useState } from "react";
import './App.css';

function App() {

    const [ shoppingListItems, setShoppingListItems  ] = useState([
        { id: 1, value: 'Perunaa', qty: 0},
        { id: 2, value: 'Porkkanaa', qty: 0},
        { id: 3, value: 'Lohta', qty: 0},
        { id: 4, value: 'Kermaa', qty: 0}  
         
    ]);


    const addlistitems = (id) => {

      let random = Math.floor(Math.random() *10)
      let newShoppingListItems = [...shoppingListItems]
      let result = newShoppingListItems.findIndex(i => i.id === id)

        if (result !== -1) {
          let additions = {...newShoppingListItems[result]}
          additions.qty= additions.qty + random;
          newShoppingListItems[result] = additions;
          setShoppingListItems(newShoppingListItems)

        }
    }

    
    
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="container">
          <Title/>
            <Shoppinglist listItems={shoppingListItems}/>
          <Buttons clickMe={addlistitems}/>
      </div>
    </div>
    </div>
  );
}

export default App;