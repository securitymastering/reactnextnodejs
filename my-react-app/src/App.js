import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
<div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <ul className="App-navlist">
            <li><a className="App-link" >Home</a></li>
            <li><a className="App-link" >Experiências</a></li>
            <li><a className="App-link" >Projetos</a></li>
            <li><a className="App-link" >Competências</a></li>
            <li><a className="App-link" >Contatos</a></li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

    </body>
    
  );
}

export default App;
