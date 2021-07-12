import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    imgLogo: {
        width: '7rem'
    },
    topbartt:{
        justifyContent: 'space-between',
    }
   
  }),
);

export default useStyles;