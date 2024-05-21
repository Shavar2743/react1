import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function addieren(z1,z2){
  return z1 +z2;
}

function wurzel(w1){
  return Math.sqrt(w1);
}

function datumadd() {
let datum = new Date().toLocaleDateString();
return datum;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>

<h1 className="h1">React ist cool</h1>

<button className="button1">Dieser Button macht nichts</button>

<h2 style={{color: "green", fontSize: 35}}>Die Geschichte der Wikinger</h2>

<p style={{color: "blue"}}>Die Geschichte der Wikinger begann in den kalten, rauen Landschaften Skandinaviens. Mutige Seefahrer stachen in ihren Langschiffen in See, um ferne Länder zu erkunden. Sie waren nicht nur gefürchtete Krieger, sondern auch geschickte Händler und Entdecker. Ihre Reisen führten sie nach England, Island, Grönland und sogar bis nach Nordamerika. In ihren Siedlungen lebten sie nach strengen Gesetzen und verehrten mächtige Götter wie Odin und Thor. Die Wikinger brachten mit ihren Eroberungen und Entdeckungen große Veränderungen nach Europa. Ihre Runenschriften erzählen noch heute von ihren Heldentaten und Abenteuern. Doch mit der Zeit ließen sie sich nieder und viele wurden zu Christen. Die Wikingerzeit endete im 11. Jahrhundert, aber ihr Erbe lebt weiter. Ihre Legenden und Geschichten faszinieren die Menschen bis heute.
</p>

<p style={{color: "red"}}>Deine Glückszahl: {Math.random() *100};</p>

<p>Heute ist der: {datumadd()};</p>
</>


);
