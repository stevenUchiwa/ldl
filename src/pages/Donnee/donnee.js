import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({

    pgSize:{
        fontSize: '2rem',
        color: '#36383b',
        marginTop:'3rem',
        textAlign:'justify',
        [theme.breakpoints.down('md')]:{
          fontSize: '1rem'
        }
    },
    pgSizeSubtitle: {
      fontSize: '2rem',
      color: '#36383b',
      textAlign:'justify',
      [theme.breakpoints.down('md')]:{
        fontSize: '1rem'
      }
    },
    pgSize02:{
      fontSize: '2rem',
      marginTop:'3rem',
      color: '#f2f4f7',
      textAlign:'justify',
      [theme.breakpoints.down('md')]:{
        fontSize: '1rem'
      }
    },
    pageSubTitle:{
      fontWeight: 'bold',
      marginTop: '1.5rem',
      color: '#0c14f5',
      [theme.breakpoints.down('md')]:{
        fontSize: '1.2rem'
      }
    },
    pgSize02Title:{
      fontSize: '2rem',
      marginTop:'1rem',
      color: '#f2f4f7',
      textAlign:'justify',
      [theme.breakpoints.down('md')]:{
        fontSize: '1rem'
      }
    },
    subtitleGris:{
      color: 'white',
      fontWeight: 'bold',
      [theme.breakpoints.down('md')]:{
        fontSize: '1.2rem'
      }
    }
   
  }),
);

export default useStyles;