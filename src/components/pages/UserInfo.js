import { Link } from 'react-router-dom';
import './Pages.css';
import UserPage from './UserPage';
import React, { handleChange, state } from 'react';
//import { Link } from 'react-router-dom'; 
import {Grid, Paper, Avatar, TextField } from '@material-ui/core';  
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Spring} from 'react-spring';


import Button from '@mui/material/Button';




export default function UserInfo() {
    const cardStyle = {margin: '20px 0'}

    const paperStyle = {padding: 20, height:'70vh', width:380, margin: "20px auto", backgroundColor: 'white', }

    
    const avatarStyle = {backgroundColor: '#f9b562'} 
    const btstyle = {margin: '8px 0', backgroundColor: '#285943'}

    const txstyle = {margin: '8px 0', backgroundColor: '#f9b562'}
    const whiteText = {color: 'white'}
    const greenText = {color: '#f9b562'}
    return (
        
        <div className = 'Background' >
           

            <Paper elevation ={10} style = {paperStyle} >
            <h2 align = 'center'> TELL US MORE ABOUT YOU! </h2>
            <Grid align = "center" style = {cardStyle}>

            <TextField id="outlined-basic" label="Major" variant="outlined" style={txstyle} fullWidth />
            </Grid>

            <Grid align = "center">
            
            <TextField id="outlined-basic" label="Interest " variant="outlined" />
            <TextField id="outlined-basic" label="Interest " variant="outlined" />
            <TextField id="outlined-basic" label="Interest " variant="outlined" />

            
            </Grid>
            <Grid align="center">
                    <Button variant="contained" color="primary" style ={btstyle}  fullWidth>
                        <Link to="/userPage">
                        <p style={whiteText} > SUBMIT </p>
                        </Link>
                    </Button>
               {/* <Link className= "buttonLink" to='/userPage'> <h2> SIGN IN </h2> </Link> */}
               </Grid>
            </Paper>
            

           
        </div>
    )
}