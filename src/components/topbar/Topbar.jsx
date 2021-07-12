import React, {useEffect,useState} from "react";
import './topbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LogoLidl from "../../Assets/assets/logo.jpg";
import useStyles from "./topbarstyle";
import {
  useLocation
 } from "react-router-dom";
 import ListIcon from '@material-ui/icons/List';
 import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
}

const Topbar = ({pgIndex}) => {
  const classes = useStyles();
  const [pathLink, setpathLink] = useState('');
  const [openCollapse, setopenCollapse] = useState(false);
  
  const handleCliqueHumburger = () => {
    let coll = !openCollapse;
    setopenCollapse(coll);
  }
 
    return(
        <div className={classes.root}>
        <AppBar position="static" color="white">
        <Toolbar className={classes.topbartt}>
          <img src={LogoLidl} alt="logo clicar" className={classes.imgLogo}/>
          <nav className='navigationbar'>
                <ul className='ulnavigation'>
                  <li>
                      <a href="/" className={ (pgIndex == 0)? 'navtextblack classActiveTop':'navtextblack'}>Accueil</a>
                  </li>
                  <li>
                      <a href="/inaptitude" className={ (pgIndex == 1)? 'navtextblack classActiveTop':'navtextblack'}>Inaptitude</a>
                  </li>
                  <li>
                      <a href="/harcelement" className={ (pgIndex == 2)? 'navtextblack classActiveTop':'navtextblack'}>Harcélement</a>
                   </li>
                   <li>
                      <a href="/entretien"><p className={ (pgIndex == 3)? 'entretein_dis navtextgreen classActiveTop':'entretein_dis navtextgreen'}>Entretien<br/>disciplinaire</p></a>
                   </li>
                   <li>
                      <a href="/adhérer" className={ (pgIndex == 4)? 'navtextblack classActiveTop':'navtextblack'}>Adhérer!</a>
                   </li>
                   <li>
                      <a href="/donnee" className='navtextyellow'><p className={ (pgIndex == 5)? 'entretein_dis navtextgreen classActiveTop':'entretein_dis navtextgreen'}>Données<br/>personnelles</p></a>
                   </li>
                   <li>
                      <a href="/compte" className='navtextyellow'><p className={ (pgIndex == 6)? 'entretein_dis navtextgreen classActiveTop':'entretein_dis navtextgreen'}>Comptes<br/>annuels</p></a>
                   </li>
                 </ul>
          </nav>
           <Button variant="outlined" color=" rgb(128, 123, 123)" className="btnIconWarper" onClick={handleCliqueHumburger}>
             <ListIcon fontSize="large" className="humberIconTopbar" elevation="3"/>
           </Button>
        </Toolbar>
      </AppBar>
      
      <Collapse in={openCollapse} timeout="auto">
      <List component="nav" aria-label="main mailbox folders">
        <ListItemLink href="/">
          <ListItemText primary="Accueil" />
        </ListItemLink>
        <ListItemLink button href="/inaptitude">
          <ListItemText primary="Inaptitude" />
        </ListItemLink>
        <ListItemLink button href="/harcelement">
          <ListItemText primary="Harcélement" />
        </ListItemLink>
        <ListItemLink button href="/entretien">
          <ListItemText primary="Entretien disciplinaire" />
        </ListItemLink>
        <ListItemLink button href="/adhérer">
          <ListItemText primary="Adhérer!" />
        </ListItemLink>
        <ListItemLink button href="/donnee">
          <ListItemText primary="Données personnelles" />
        </ListItemLink>
        <ListItemLink button href="/compte">
          <ListItemText primary="Comptes annuels" />
        </ListItemLink>
      </List>
      </Collapse>
      
        </div>
    )

}

export default Topbar