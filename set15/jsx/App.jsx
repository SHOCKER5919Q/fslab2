function App() {
  // literals
  const name = 'Saket';
  const age = 20;
  const branch = 'CSE';
  const marks = [85, 90, 95];

  return (
    <div>
      <h2>User Details</h2>

      {/* literal */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>

      {/* expressions */}
      <p>Next year age: {age + 1}</p>
      <p>Branch in caps: {branch.toUpperCase()}</p>
      <p>Average marks: {(marks[0] + marks[1] + marks[2]) / 3}</p>
      <p>Status: {age >= 18 ? 'Adult' : 'Minor'}</p>
      <p>Today: {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
