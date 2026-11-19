function App() {
     const names = ['Saket', 'Arjun', 'Priya', 'Ravi'];

     return (
       <div>
         <h2>Name List</h2>
         <ul>
           {names.map((n, i) => <li key={i}>{n}</li>)}
         </ul>
       </div>
     );
}

export default App;
