import React from "react";
import Header from '../../components/header/header';
import './adheres.css';
import useStyles from './adheres.js';
import Typography from '@material-ui/core/Typography';

const Adheres = () => {

    const classes = useStyles();
    return(
        <div>
            <Header pgIndex={4} />
            <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Adhérer au syndicat ACTION, c’est faire partie d’un syndicat libre et indépendant !
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            ACTION défend les droits et les intérêts des salariés, et se bat en particulier sur les sujets de l’inaptitude et du harcèlement chez LIDL.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Comment adhérer ? Pour adhérer, il suffit de remplir un bulletin d’adhésion et de payer une cotisation syndicale.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le bulletin d’adhésion peut être envoyé à la trésorière à l’adresse suivante : @…  (à télécharger) Le paiement peut être effectué par virement, chèque, prélèvement automatique ou espèce.
            </Typography>
            </section>
            </div>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
             En 2021, le montant de la cotisation annuelle est fixé à :
            </Typography>
            <ul className="listeAdhere">
                <li>– 60 euros pour tous les salariés (hors étudiant)</li>
                <li>– 20 euros pour les étudiants</li>
            </ul>
            </section>
            </section>
            
            
        </div>
    )

}

export default Adheres