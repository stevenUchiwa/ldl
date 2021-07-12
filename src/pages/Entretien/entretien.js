import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({

    pgSize:{
        fontSize: '2rem',
        color: '#36383b',
        marginTop:'3rem'
    },
    pgSize02:{
      fontSize: '2rem',
      color: '#36383b',
      marginTop:'3rem',
      color: '#f2f4f7'
    }
   
  }),
);

export default useStyles;