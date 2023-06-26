import logo from './logo.svg';
import './App.css';

function App() {
  function callPyhtonFile() {
    const { exec } = window.require('child_process')
    exec('node Script.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    })
  }


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
        <button onClick={callPyhtonFile}>callPythonFile</button>
      </header>
      <div>
        <h2>Welcome to the reactjs.</h2>
      </div>
    </div>
  );
}

export default App;

