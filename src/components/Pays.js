import React, {useEffect, useState} from 'react';
import {Container, Segment, Label} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Pays = (props) => {
  console.log(props)
  
const [pays, setData]= useState([])

const getCovidData = async () => {
    try {
        const res = await fetch(`https://api.covid19api.com/total/country/${Country}`);
        const actualData = await res.json();
        console.log(actualData)
       // setData(actualData) 
 
    } catch (err) {
        console.log(err)
    }

}

// useEffect Hooks
useEffect(() => {
    getCovidData();

}, []);
  

  return (
    <Container>
      
   <h1>{pays.Country}</h1>
      {/* affciher la populayion de pays selectionne */}
      <p>Cas Confirmees : {pays.confirmed}</p>
      {/* //pour affiher la uperficie de pays selectionne */}
      <p>Cas de Decees: {pays.deaths}</p>
  {/*     pour afficher la position geometrique de pays selectionne */}
      <p>Cas Retablis: {pays.recovered}</p>
    </Container>
  )
}

export default Pays;




