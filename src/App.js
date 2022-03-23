import './App.css';
import Register from "./Register";
import Login from "./Login";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Routes, Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
      
    <div className="app">
        <Routes>
          <Route path='/' element = { <Login /> } />
        </Routes>
     
    </div>
  );
}

export default App;
