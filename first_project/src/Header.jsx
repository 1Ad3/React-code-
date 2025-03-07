import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      {/* Note: If there's a single <h1>, no need for <div>. If more than one, wrap with <div>. */}
      <h1>React</h1>
      <h1>Code by Ad</h1>
    </div>
  );
}

export default App;
