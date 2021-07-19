import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <div className="container">
            <center><h1 id="sobre">Promocoes imperdiveis para voce! <br/> De uma olhada no cardapio, sao diversos sabores e ofertas! <br/></h1></center>
            <img src={imagePrinc }/>
            <br/>
            <br/>
            <form>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" name="email" placeholder="E-mail de destino.." />
              <input type="submit" onclick='msgConfirmacao()' value="Enviar" />
            </form>
          </div>
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
