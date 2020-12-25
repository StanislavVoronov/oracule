import logo from './logo.svg';
import './App.css';

function App() {

    useEffect(() => {
        fetch('https://myip.ms/s.php', {
            method: 'POST',
            body: JSON.stringify({"home_txt": 'mgutm.ru'})
        }).then(response => document.appendChild(response))
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
