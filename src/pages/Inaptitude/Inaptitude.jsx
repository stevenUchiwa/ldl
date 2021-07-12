import React from "react";
import Header from "../../components/header/header";
import Typography from '@material-ui/core/Typography';
import useStyles from './inaptitude';



const Inaptitude = () => {
    const classes = useStyles();

    return(
        <>
            <Header pgIndex={1} />
            <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Le syndicat ACTION s’engage à défendre les salariés devenus inaptes notamment à cause des conditions de travail chez LIDL. Vous avez le droit d’être reclassé au sein de la société LIDL. 
            </Typography>
            <Typography className={classes.pgSize} variant="subtitle1" gutterBottom>
            Mais LIDL s’obstine à ne proposer que des postes éloignés et/ou en CDD pour vous pousser à refuser les postes.
            </Typography>
            </section>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography className={classes.pgSize02} variant="subtitle1" gutterBottom>
            Contactez le syndicat ACTION dès que possible ! Nous vous aiderons à adapter votre poste de travail et, si vous êtes déjà inapte, à faire valoir vos droits pour accroître vos chances de reclassement.
            </Typography>
            </section>
            </section>
            </div>
        </>
    )

}

export default Inaptitude