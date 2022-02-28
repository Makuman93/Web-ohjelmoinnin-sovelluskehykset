import Productlist from './components/Productlist'
import Searchbar from './components/Searchbar'
import React from "react";
import { useState } from "react";
import './App.css';
import johto from './johto.png'
import langatonnäppis from './langatonnäppis.png'
import läppäri from './läppäri.png'
import mikki from './mikki.png'
import näyttö from './näyttö.png'
import printteri from './printteri.png'
import sdkortti from './sdkortti.png'
import ssd from './ssd.png'
import webkamera from './webkamera.png'
import five from './five.png'
import four from './four.png'
import one from './one.png'

function App() {

    const [ productlist, setproductlist ] = useState([
        {img: johto ,name: 'Iphonen johto',description: "Paras johto markkinoilla!",price: 59.99, rating: five},
        {img: langatonnäppis ,name: 'Langaton hiiri + näppis',description: "Ei enää ärsyttäviä johtoja",price: 69.99, rating: four},
        {img: läppäri ,name: 'Acer Nitro läppäri',description: "Hyvä hakkerointiin",price: 1990.99, rating: five},
        {img: mikki ,name: 'Studio mikki',description: "Tällä nauhoittaa vaikka asmr:ää",price: 75.99, rating: four},
        {img: näyttö ,name: 'Joku näyttö',description: "Perus näyttö",price: 150.99, rating: one},
        {img: printteri ,name: 'HP prinneri',description: "Musteiden hinnalla!",price: 59.99, rating:four}, 
        {img: sdkortti ,name: 'MicroSD',description: "Tähän tallenetaan se asmr",price: 79.99, rating: four},
        {img: ssd ,name: 'SSD kovalevy',description: "Lisää tilaa kotivideoita varten",price: 299.99, rating: five},
        {img: webkamera ,name: 'Webbikamera',description: "Tällä saa naaman näkyviin zoomissa",price: 29.99, rating: four },   
    ]);

   
  return (
    <div className="App"> 
      <Searchbar/>
        <div className ="productContainer">
          {productlist.map(p => <Productlist img={p.img} name={p.name} description={p.description} price={p.price} rating={p.rating}/>) }
      </div>
    </div>
  );
}

export default App;