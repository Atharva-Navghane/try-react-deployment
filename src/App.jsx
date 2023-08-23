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
        <p>Atharva Navghane</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is just a practice run to test the deployment of a react project
          using Github
        </a>
      </header>
    </div>
  );
}

export default App;
