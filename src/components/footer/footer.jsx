import React from "react";
import './footer.css';
import Typography from '@material-ui/core/Typography';
import logo from '../../Assets/assets/logo.jpg';

const Footer = () => {
  return(
    <footer className="footerContainer">
         <div className='secondFooterContainer'>
         <img src={logo} alt='logo actions' className='imgFooterLogo'/>
         <div className='footerPages'>
         <p className="nosPagesFooter">
          Nos pages
        </p>
        <section className="navigationFooterContainer">
        <ul className='ulnavigationFooter'>
                  <li>
                      <a href="/">Accueil</a>
                  </li>
                  <li className="navLiNotP">
                      <a href="/inaptitude">inaptitude</a>
                  </li>
                  <li>
                      <a href="/harcelement">Harcélement</a>
                   </li>
                   <li>
                      <a href="/entretien"><p>Entretien<br/>disciplinaire</p></a>
                   </li>
                 </ul>
               <ul className='ulnavigationFooter'>
                   <li>
                      <a href="/adhérer">Adhérer!</a>
                   </li>
                   <li>
                      <a href="/donnee" className='navtextyellow'><p>Données<br/>personnelles</p></a>
                   </li>
                   <li>
                      <a href="/compte" className='navtextyellow'><p>Comptes<br/>annuels</p></a>
                   </li>
                 </ul>
        </section>
         
       
         </div>
         <section className="contactFooter">
           <p>
             Nos Contact
          </p>
          <p>
          06.66.89.49.43 
          </p>
    
         </section>
         
         </div>
         <section className="lastBlockFooter">
          <Typography variant="button" display="block" gutterBottom>
           2021, Action Syndicat
          </Typography>
         </section>
         
    </footer>
  );
}

export default Footer;