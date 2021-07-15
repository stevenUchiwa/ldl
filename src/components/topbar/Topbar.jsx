import React from "react";
import './topbar.css';
import useStyles from "./topbarstyle";



const Topbar = ({pgIndex}) => {
  const classes = useStyles();
  
    return(
       <>
        <div className={classes.root}/>
        <nav className='navigationbar'>
                <ul className='ulnavigation'>
                  <li>
                      <a href="/" className={ (pgIndex === 0)? 'navtextblack classActiveTop':'navtextblack'}>Accueil</a>
                  </li>
                  <li>
                      <a href="/inaptitude" className={ (pgIndex === 1)? 'navtextblack classActiveTop':'navtextblack'}>Inaptitude</a>
                  </li>
                  <li>
                      <a href="/harcelement" className={ (pgIndex === 2)? 'navtextblack classActiveTop':'navtextblack'}>Harcélement</a>
                   </li>
                   <li>
                      <a href="/entretien" className={ (pgIndex === 3)? 'navtextblack classActiveTop':'navtextblack'}>Entretien disciplinaire</a>
                   </li>
                   <li>
                      <a href="/adhérer" className={ (pgIndex === 4)? 'navtextblack classActiveTop':'navtextblack'}>Adhérer!</a>
                   </li>
                   <li>
                      <a href="/donnee" className={ (pgIndex === 5)? 'navtextblack classActiveTop':'navtextblack'}>Données personnelles</a>
                   </li>
                   <li>
                      <a href="/compte" className={ (pgIndex === 6)? 'navtextblack classActiveTop':'navtextblack'}>Comptes annuels</a>
                   </li>
                 </ul>
          </nav>
      </>
    )

}

export default Topbar