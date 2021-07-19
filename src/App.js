
import React from 'react';
import logo from './image-template.png'; // Tell webpack this JS file uses this image
import './App.css';
 
function App(props) {
  return (
    
    <div className="container">
      <center><h1 id="sobre">Promocoes imperdiveis para voce! <br/> De uma olhada no cardapio, sao diversos sabores e ofertas! <br/></h1></center>
      <img src={logo} alt="imagem referente a promocao"/>
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