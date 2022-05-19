import logo from './logo.png';
import './App.css';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          e-retail store@underdevelopment...
        </p>
      </header>
      <Home />
    </div>
  );
};

export default App;