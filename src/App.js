import React from 'react';
import Nav from './NavBar';
import { makeStyles} from '@material-ui/core/styles';
import {Paper ,TextField,Button,CircularProgress} from '@material-ui/core';
//import { CenterFocusStrong } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
 
  paper: {
    width:400,
    marginTop: 20,
    margin: '0 auto',
    textAlign: 'center',
    padding: 10,

  },
  input_field:{
    width:'98%',
    marginBottom:'10px',
  },
  Circular:{
    marginTop:10,
  }
}));


function App() {
  const classes = useStyles();
  return (

    <div className={classes.root}>
      <Nav />
      <Paper elevation={3} className={classes.paper} >
      
        <h1>LogIn </h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField  label="Enter Email" className={classes.input_field}/>
          <TextField  label="Enter Password" className={classes.input_field}/>
          <Button variant="contained" color="primary" className={classes.input_field} >
             Primary
          </Button>
        </form>
        <CircularProgress className={classes.Circular} value={50} />
      </Paper>
    
    </div>


  );
}

export default App;
