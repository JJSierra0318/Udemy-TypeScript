import { useState } from 'react'
import { v4 as getId } from 'uuid'
import './App.css'
import type Item from './models/Item'
import Greeter from './components/Greeter'
import ShoppingList from './components/ShoppingList'
import ShoppingListForm from './components/ShoppingListForm'

function App() {

  const [items, setItems] = useState<Item[]>([])
  const addItem = (product: string, quantity: number) => {
    setItems([...items, { id: getId(), product, quantity }])
  }

  /* const items = [
    { id: 1, product: "Lemon", quantity: 3 },
    { id: 2, product: "Chicken Breasts", quantity: 2 }
  ] */

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
