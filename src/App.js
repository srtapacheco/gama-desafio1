
import React from 'react';
import './App.css';
import image1 from './image-template.png'
 

function msgConfirmacao()
{
  alert("Email enviado!");
}
 
function App() {
  return (
    <div className="container">
      <center><h1 id="sobre">Promocoes imperdiveis para voce! <br/> De uma olhada no cardapio, sao diversos sabores e ofertas! <br/></h1></center>
      <img src={image1}/>
      <br/>
      <br/>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." />
        <input type="submit" onclick='msgConfirmacao()' value="Enviar" />
      </form>
    </div>
  );
}



export default App;