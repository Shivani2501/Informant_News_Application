import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    container:{
        padding: '0  5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '100%',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        textAlign:'center',
        border: '3px solid grey',
        boxShadow:'10px 5px 5px #6f2b7c',
      },
      carousel: {
        maxWidth:'98%',
        margin: '0 auto',
        padding:'0 15px 0',
        borderRadius:20,
      }
});