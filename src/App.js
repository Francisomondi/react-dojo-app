import "./App.css";
import Hello from "./components/Hello";

function App() {
  const title = "Welcome to mawimbi restaurant";
  const admin = { name: "Francis Aziz", department: "support" };
  return (
    <div className="App">
      <div className="content">
        <h2>{title}</h2>
        <p>
          my name is {admin.name} and am the {admin.department} person
        </p>
        <Hello />
      </div>
    </div>
  );
}

export default App;
