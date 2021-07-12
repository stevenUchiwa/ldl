import React from "react";
import Header from '../../components/header/header';
import Typography from '@material-ui/core/Typography';
import './harcelement.css';
import useStyles from './harcelement';


const Harcelement = () => {

    const classes = useStyles();
    return(
        <>
            <Header pgIndex={2} />
            <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION lutte en permanence contre le management agressif chez LIDL.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Si vous estimez que vous êtes victime de conditions de travail néfastes pour votre santé psychologique, contactez dès que possible le syndicat ACTION.
            </Typography>
            </section>
            </div>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
            Nous pouvons établir un rapport de la situation dans votre magasin et dénoncer les manquements auprès de la direction régionale.
            </Typography>
            </section>
            </section>
            
        </>
    )

}

export default Harcelement