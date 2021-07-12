import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Acceuil from '../pages/Acceuil/Acceuil';
import Adheres from '../pages/Adheres/Adheres';
import Entretien from '../pages/Entretien/Entretien';
import Harcelement from "../pages/Harcelement/Harcelement";
import Inaptitude from "../pages/Inaptitude/Inaptitude";
import Donnee from "../pages/Donnee/Donnee";
import Compte from "../pages/Compte/Compte";


const Myrouter = () =>{
    return(
        <Router>
          <Switch>
            <Route path="/" component={Acceuil} exact />
            <Route path="/entretien" exact component={Entretien} />
            <Route path="/harcelement" exact component={Harcelement} />
            <Route path="/inaptitude" exact component={Inaptitude} />
            <Route path="/adhérer" exact component={Adheres }/>
            <Route path="/donnee" exact component={Donnee} />
            <Route path="/compte" exact component={Compte}/>
          </Switch>
        </Router>
    )

}


export default Myrouter;