let Header = ({ name }) => {
  return (
    <>
      <h1> {name} Heyy Welcome to my websit </h1>
    </>
  );
};

let Main = (props) => {
  return (
    <>
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
    </>
  );
};

let App = () => {
  return (
    <>
      <Header name="Parvez"></Header>
      <Main user = {{name: "devuu", age: "25"}}></Main>
    </>
  );
};

let root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App></App>);
