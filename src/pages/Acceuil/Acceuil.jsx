import React from "react";
import './acceuil.css';
import Typography from '@material-ui/core/Typography';
import useStyles from './acceuilcss';
import Header from '../../components/header/header'

const Acceuil = () => {
    const classes = useStyles();
    return(
        <>
        <Header pgIndex={0} />
        <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION est un syndicat libre et indépendant qui défend les salariés de la société LIDL.
            </Typography>
            <Typography className={classes.pgSize} variant="subtitle1" gutterBottom>
            Nous défendons tous les salariés, et en particulier, les salariés victimes d’accident du travail et de harcèlement moral. Nous assistons également les salariés à l’occasion de leur entretien disciplinaire ou de leur entretien préalable au licenciement. On peut donner des conseils juridiques.
            </Typography>
            </section>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
             Si vous voulez être accompagné ou aider les salariés, contactez Laingo RAKOTOMALALA au 06.66.89.49.43 et adhérez au syndicat ACTION.
            </Typography>
            </section>
            </section>
        </div>
        </>

    )

}

export default Acceuil