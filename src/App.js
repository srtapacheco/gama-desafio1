
import React from 'react';
import logo from './image-template.png'; // Tell webpack this JS file uses this image
import './App.css';
 


function App() {
  return (
    
    <div className="container">
      <nav id="menu">
      <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Produtos</a></li>
          <li><a href="/#">Missão</a></li>
          <li><a href="/#">Links</a></li>
          <li><a href="/#">Contato</a></li>
      </ul>
      </nav>
      <h1>**Promocoes imperdiveis** <br/> Encontre no cardapio diversos sabores e ofertas por tempo limitado! <br/></h1>
      <div className="banner">
        <img src={logo} alt="imagem referente a promocao"/>
      </div>
      <br/>
      <br/>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." />
        <input type="submit" value="Enviar" />
      </form>

    </div>
  );
}

export default App;