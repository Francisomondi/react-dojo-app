import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Hello />
        <Message />
      </div>
    </div>
  );
}

export default App;
