import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text === '') return;                         // ignore empty input
    setItems([...items, text]);                      // old items + new one
    setText('');                                     // clear the box
  };

  const removeItem = (i) => {
    setItems(items.filter((_, index) => index !== i));
  };

  return (
    <div>
      <h2>My List</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(i)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total items: {items.length}</p>
    </div>
  );
}

export default App;
