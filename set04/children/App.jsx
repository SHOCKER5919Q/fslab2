function Header(props) {
  return <h2>Welcome, {props.user}</h2>;
}

function Profile(props) {
    return <p>Branch: {props.branch} | Year: {props.year}</p>;
}

function Footer(props) {
  return <p>College: {props.college}</p>;
}

function App() {
  return (
    <div>
      <Header user="Saket" />
      <Profile branch="CSE" year={2} />
      <Footer college="VCE" />
    </div>
  );
}

export default App;
