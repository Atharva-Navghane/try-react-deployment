import logo from "./logo.svg";
import "./App.css";
import NavbarComp from "./components/NavbarComp";
import Searchbtn from "./components/Searchbtn";


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Searchbtn />
      <header className="App-header">
        <h1>The one stop solution for all your medical needs</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is just a skeleton of how our website will be</p>
        
      </header>
    </div>
  );
}

export default App;
