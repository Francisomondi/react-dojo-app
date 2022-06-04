import "./App.css";
import Hello from "./components/Hello";
//import Message from "./components/Message";
import Profile from "./components/Profile";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Hello />
        <Profile name="francis" lastname="ödero" />
        <Profile name="omondi" lastname="John" />
        <Product />
      </div>
    </div>
  );
}

export default App;
