import { useState } from 'react';

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Button clicked {clicks} times</h2>
      <button onClick={() => setClicks(clicks + 1)}>Click</button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
}

export default App;
