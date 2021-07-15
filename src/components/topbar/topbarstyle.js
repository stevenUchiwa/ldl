import { createStyles, makeStyles } from '@material-ui/core/styles';
import Test02 from '../../Assets/assets/logoPrime.png';
import banner from '../../Assets/assets/banner02.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${Test02}), url(${banner})`,
      backgroundRepeat: 'no-repeat, no-repeat',
      backgroundSize: '45vw, cover',
      backgroundPosition: 'center top, center',
      height: '70vh',
      [theme.breakpoints.down('md')]:{
        backgroundSize: 'contain, cover',
      }
    },
    imgLogo: {
        width: '50rem'
    },
    topbartt:{
        justifyContent: 'space-between',
    }
   
  }),
);

export default useStyles;