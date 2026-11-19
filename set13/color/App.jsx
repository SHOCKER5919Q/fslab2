import { useState } from 'react';

function App() {
  const colors = ['red', 'green', 'blue', 'purple', 'orange'];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((index + 1) % colors.length);                          // wraps back to 0
  };

  return (
    <div>
      <h2 style={{ color: colors[index] }}>
        This text changes colour
      </h2>
      <button onClick={changeColor}>Change Colour</button>
      <p>Current colour: {colors[index]}</p>
    </div>
  );
}

export default App;
