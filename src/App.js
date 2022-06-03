import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Hello />
        <Message />
        <Profile name="francis" lastname="ödero" />
        <Profile name="omondi" lastname="John" />
      </div>
    </div>
  );
}

export default App;
