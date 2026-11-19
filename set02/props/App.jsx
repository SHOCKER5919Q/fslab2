function Student(props) {
    return <h3>{props.name} studies in {props.branch}</h3>;
}

function App() {
    return (
      <div>
        <h2>Student Details</h2>
        <Student name="Saket" branch="CSE" />
        <Student name="Arjun" branch="ECE" />
      </div>
    );
}

export default App;
