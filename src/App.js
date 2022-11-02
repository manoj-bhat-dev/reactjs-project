import logo from "./logo.svg";
import "./App.css";
import Comp from "./Comp"; //seperate component calling
import {Comp2} from './comp2'; //default not required
function App() {
  return (
    <div className="App">
      <div className="logo-size">
        {" "}
        <img src={logo} alt="LOGO" />
      </div>
      <h1>hello world</h1>
      {/* Comp is calling here */}
      <Comp />
      <h1>---</h1>
      <Comp2 />
      <User_component />
    </div>
  );
}

// inside component
function User_component() {
  return (
    <div className="logo-size">
      <img src={logo} alt="LOGO" />

      <h1>component</h1>
      <h2>3nd component</h2>
    </div>
  );
}

export default App;
