import React, {useEffect, useState} from 'react';
import {Container, Segment, Label} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Pays = (props) => {
  console.log(props)
  
const [data, setData]= useState([])

const getCovidData = async () => {
    try {
        const res = await fetch(`https://api.covid19api.com/country/${props.location.state.countryName}`);
        const actualData = await res.json();
        // console.table(actualData);
        const uniqData= actualData[actualData.length-1];
        setData(uniqData)
 
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
      
    <h1>{data.Country}</h1>
       {/* affciher la populayion de pays selectionne */}
       <p>Date : {data.Date}</p>
       <p>Cas Confirmees : {data.Confirmed}</p>
       {/* //pour affiher la uperficie de pays selectionne */}
       <p>Cas de Decees: {data.Deaths}</p>
   {/*     pour afficher la position geometrique de pays selectionne */}
       <p>Cas Retablis: {data.Recovered}</p>
     </Container>
  )
}

export default Pays;




