import React from "react";
import Header from '../../components/header/header';
import Typography from '@material-ui/core/Typography';
import './entretien.css';
import useStyles from './entretien.js';


const Entretien = () => {
    const classes = useStyles();

    return(
        <>
            <Header pgIndex={3} />
            <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION peut vous assister lors de vos entretiens disciplinaires ou de votre entretien préalable au licenciement.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            L’objectif est d’analyser ensemble les fautes qui vous sont reprochées et de définir une stratégie.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Si les faits reprochés sont faux, nous vous aidons à rassembler les preuves nécessaires pour défendre votre position et éviter une sanction.
            Nous assistons ensuite avec vous à l’entretien pour vous défendre. Après l’entretien, nous rédigeons un compte-rendu d’entretien qui vous est adressé. L’avantage ? Vous pouvez bénéficier de l’expérience de vos représentants ACTION qui connaissent la société LIDL et réalisent régulièrement des assistanats de salariés. 
            </Typography>
            </section> 
            </div>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
            Qui contacter pour être assisté ? Madame Laingo RAKOTOMALALA 06.06.06.06.06
            </Typography>
            </section>
            </section>
        </>
    )

}

export default Entretien