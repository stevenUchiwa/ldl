import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({

    pgSize:{
        fontSize: '2rem',
        color: '#36383b',
        marginTop:'3rem',
        [theme.breakpoints.down('md')]:{
          fontSize: '1rem'
        }
    },
    pgSize02:{
      fontSize: '2rem',
      marginTop:'3rem',
      color: '#f2f4f7',
      [theme.breakpoints.down('md')]:{
        fontSize: '1rem'
      }
    }
   
  }),
);

export default useStyles;