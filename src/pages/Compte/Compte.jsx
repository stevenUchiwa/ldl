import React from "react";
import Header from '../../components/header/header';
import Typography from '@material-ui/core/Typography';
import './compte.css';
import useStyles from './compte';
import Cpt from '../../Assets/assets/cpt.jpg'


const Compte = () => {
    const classes = useStyles();

    return(
        <>
           <Header pgIndex={6} />
           <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION publie ses comptes annuels conformément aux obligations de transparence financière.
            </Typography>
            <img src={Cpt} alt="image compte" className='imgcpt'/>
            </section>
            </div>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
            Début 2022, vous pourrez retrouver sur cette page les comptes annuels 2021 du syndicat ACTION.
            </Typography>
            </section>
            </section>
        </>
    )

}

export default Compte