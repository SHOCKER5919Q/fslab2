// stateless = no useState, no class, just props in and JSX out
function Greeting(props) {
  return <h2>Hello, {props.name}! Welcome to React.</h2>;
}

function App() {
  return (
    <div>
      <Greeting name="Saket" />
      <Greeting name="Arjun" />
    </div>
  );
}

export default App;
