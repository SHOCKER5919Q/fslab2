import { useState, useEffect } from 'react';

function Timer() {
    const [sec, setSec] = useState(0);

    useEffect(() => {
        console.log('Timer started');
        const id = setInterval(() => setSec(s => s + 1), 1000);

        // CLEANUP - runs when the component unmounts
        return () => {
          clearInterval(id);
          console.log('Timer cleared - component unmounted');
        };
    }, []);

    return <h2>Seconds: {sec}</h2>;
}

function App() {
    const [show, setShow] = useState(true);

    return (
      <div>
        {show && <Timer />}
        <button onClick={() => setShow(!show)}>
          {show ? 'Unmount Timer' : 'Mount Timer'}
        </button>
      </div>
    );
}

export default App;
