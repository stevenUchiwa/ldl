import React from "react";
import './acceuil.css';
import Typography from '@material-ui/core/Typography';
import useStyles from './acceuilcss';
import Header from '../../components/header/header'

const Acceuil = () => {
    const classes = useStyles();
    return(
        // <div className="acceuilcontainer">
        //      <section className="acceuilcontent">
        //          <p className="acc_first_p">Votre contact LIDL</p>
        //          <p className="acc_second_p">Mme Laingo RAKOTOMALALA</p>
        //          <p className="acc_tree_p">Employée Polyvalente</p>
        //          <p className="acc_tree_p">DR " Le Coundray Monteaux "</p>
        //          <p className="acc_tree_p">06.45.22.00.00</p>
        //      </section>
        // </div>
        <>
        <Header pgIndex={0} />
        <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION est un syndicat libre et indépendant qui défend les salariés de la société LIDL.
            </Typography>
            <Typography className={classes.pgSize} variant="subtitle1" gutterBottom>
            Nous défendons tous les salariés, et en particulier, les salariés victimes d’accident du travail et de harcèlement moral. Nous assistons également les salariés à l’occasion de leur entretien disciplinaire ou de leur entretien préalable au licenciement.
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