import logo from './logo.svg';
import './App.css';

//importar coomponetes
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <Login />
        </section>

      </header>

    </div>
  );
}

export default App;
