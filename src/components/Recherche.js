import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Input ,Label, Button, Card, Image } from 'semantic-ui-react';



const Recherche = (props) => {
  // declaration de l`etat de L`API
  const [nom, setNom] = useState("");
  const [pays, setPays] = useState([]);

  const onClick = () => {
  /*   onClick() elle s`execute a chaque fois on click sur le boutton Recherche
    qui va faire appelle a l`API qui vas retourner une reponse (Data) sous forme de json qui 
    contient nom de tout les pays  */
   
    fetch(`https://restcountries.eu/rest/v2/name/${nom}`)
      .then((response) => response.json())
      .then((data) => setPays(data))
      /* dans le cas ou il ya un probleme de connection avec l`API catch va lancer une exception 
      montrant a l`utulisateur qu`il ya un message d`erreur  dans la console*/
      .catch((erreur) => console.log(erreur));
   /*    .catch((erreur) => alert("ERROR")); ou  bien une alert */

  }

  const renderPays = () => {
    /* fonction renderPays et return une fonction map la derniere va mapper ou parcourir l`API */
    return pays.map((unPays) => {
    /*   la map va returner le key qui alpha3Code aissi  les drapeaux  des pays flag sous forme d`image */
      return ( 
        <Card key={unPays.alpha3Code}>
          <Image src={unPays.flag} />
          <Card.Content>
            {/* un evenement  onClick sur le drapeaux qui va faire
             un push donner un path pour chaque pays et afficher l`etat de chaque pays  */} 
            <Card.Header onClick={() => {
              props.history.push({
                
                pathname: `/pays/${unPays.name}`,
                state: {
                  countryName: `${unPays.name}`
                }
              })
            }}>{unPays.name}
            </Card.Header>
          </Card.Content>
        </Card>
      )
    })
  }

  return (
    <Container>
      <h1>Rechercher</h1>
      {/* composant Label pour de semantic pour afficher une icone */}
      <Label pointing="right">Pays</Label>
   {/*    Composant zone de text Input on passe en value le nom comme props
       la methode onChange() qui recoie un evenement e et fait appelle a setNom qui retoure les nom */}
      <Input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
     {/*  creation de button Rechercher les pays grace au composant Button qui a un evenement onClick */}
      <Button onClick={onClick}>Rechercher les pays</Button>
      <h2>Résultats de la recherche</h2>
     {/*  s`il ya une un pays saisie alors il y`aura une resultat et on vas recevoir les pays sinon undefined  */}
      {pays.length > 0 ? `Il y a ${pays.length} résultat(s)` : undefined}
      {/*  ajout d`un style  */}
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%"}}>
        {/* s`il ya un pays saise dans Input alors renderPays() va s`executer et la function map vas 
        parcourir l`API et retourner les pays sinon rien undefined */}
        {pays.length > 0 ? renderPays() : undefined}
      </div>
    </Container>
  )
}

export default Recherche;




