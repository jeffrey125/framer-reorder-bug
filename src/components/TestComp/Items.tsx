import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Item } from './Item';

const initialItems = ['🍅 Tomato', '🥒 Cucumber', '🧀 Cheese', '🥬 Lettuce'];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group
      axis="y"
      onReorder={setItems}
      values={items}
      className="relative w-[300px]"
    >
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
