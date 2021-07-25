
import './App.css';
import { BrowserRouter,  NavLink, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Acceuil from './components/Acceuil';
import Recherche from './components/Recherche';
import Pays from './components/Pays';
import {Menu} from 'semantic-ui-react';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          <Menu>
              {/* NavLink juste pour ajouter de style */}
              <Menu.Item as={NavLink}  activeStyle={{ fontWeight: "bold" }} exact={true} to="/Acceuil">Acceuil</Menu.Item>
              <Menu.Item as={NavLink}  activeStyle={{ fontWeight: "bold" }} to="/recherche"> Recherche</Menu.Item>
          </Menu>
        </header>
        {/* Switch pour tester un par un  */}
        <Switch>
          {/* definir les  Route pour naviguer entre les diffirent composants */}
          <Route path="/" component={Acceuil} exact={true} />
          <Route path="/recherche" component={Recherche} />
          <Route path="/pays/:codePays" component={Pays} />
       
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
