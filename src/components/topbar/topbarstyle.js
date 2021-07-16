import { createStyles, makeStyles } from '@material-ui/core/styles';
import banner from '../../Assets/assets/banner.jpg'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: `url(${banner})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center top',
      height: '80vh',
      [theme.breakpoints.down('md')]:{
        backgroundSize: 'contain',
        height: '65vh',
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