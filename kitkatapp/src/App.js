import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
     <NavBar /> 
      {/* <Home /> */}
      {/* <Login /> */}
    <Register />
    </div>
  );
}

export default App;
