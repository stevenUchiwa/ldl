import Header from '../../components/header/header';
import Typography from '@material-ui/core/Typography';
import './donnee.css';
import useStyles from './donnee';

const Donnee = () =>{
    const classes = useStyles();
    return(
        <>
            <Header pgIndex={5} />
            <div className='containerBox'>
            <section className='containerIndex'>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Dans le cadre de son activité, le syndicat ACTION collecte et traite les données personnelles de ses adhérents dans le respect de la règlementation RGPD.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Les données collectées Au moment de l’adhésion, le syndicat ACTION collecte les données personnelles des adhérents suivantes : les noms, prénoms, adresse électronique, adresse postale, numéro de téléphone, le statut du salarié (étudiant ou non), les coordonnées bancaires, et sa signature.
            </Typography>
            <Typography variant="h4" gutterBottom className={classes.pageSubTitle} align="justify">
            Le traitement des données collectées
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSizeSubtitle}>
            Les données personnelles des adhérents sont nécessaires à l’exercice des droits et obligations de l’adhérent.
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.pgSize}>
            Elles permettent notamment de fixer le montant de l’adhésion, de convoquer les adhérents aux assemblées générales et d’assurer la défense de leurs droits (envoi d’informations de nature juridique ou syndicale, rédaction de courriers de contestation…). A l’exception des représentants syndicaux, les données personnelles ne sont pas communiquées aux employeurs. En interne, seuls le Secrétaire général et le Trésorier ont accès aux données personnelles des adhérents. En externe, la banque du syndicat a accès aux noms, prénoms et coordonnées bancaires des adhérents afin de permettre la mise en œuvre des moyens de paiement des cotisations syndicales ; l’expert-comptable du syndicat a accès aux noms et prénoms des adhérents pour établir la comptabilité du syndicat ; l’avocat du syndicat a accès aux données nécessaires à la défense des droits des adhérents et du syndicat.
            </Typography>
            <Typography variant="h4" gutterBottom className={classes.pageSubTitle} align="justify">
            La durée de conservation des données
            </Typography>
            <Typography  paragraph className={classes.pgSizeSubtitle} gutterBottom>
            Les données personnelles collectées sont conservées pendant toute la durée de l’adhésion et pendant une période de 5 ans suivant la fin de l’adhésion. Vos droits sur vos données personnelles Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données en application du Règlement RGDP.
            </Typography>
            </section>
            </div>
            <section className='containerSecondBloc'>
            <section className='containerIndex alginCenterBox'>
            <Typography variant="h4" gutterBottom align="justify" className={classes.subtitleGris}>
            Consultez le site cnil.fr pour plus d’informations sur vos droits
            </Typography>
            <Typography className={classes.pgSize02Title} variant="subtitle1" gutterBottom>
             Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif, vous pouvez contacter le Secrétaire général, Laingo RAKOTOMALALA, chargée de l’exercice de vos droits, à l’adresse suivante : …@… Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL.
            </Typography>
            </section>
            </section>
               
        </>
    );

}

export default Donnee