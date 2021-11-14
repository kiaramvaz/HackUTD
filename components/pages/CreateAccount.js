import UserInfo from './UserInfo';
import './Pages.css';
import React from 'react';
//import { Link } from 'react-router-dom'; 
import {Grid, Paper, Avatar, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';

import './Pages.css';
import Button from '@mui/material/Button';

function CreateAccount() {
    const paperStyle = {padding: 20, height:'70vh', width:380, margin: "20px auto" }
    const avatarStyle = {backgroundColor: '#f9b562'} 
    const btstyle = {margin: '8px 0', backgroundColor: '#285943'}
    const whiteText = {color: 'white'}
    const greenText = {color: '285943'}
    return (

        <Grid className='Background'> 
            <Paper elevation ={10} style = {paperStyle}>
                <Grid align = "center">  
               <Avatar style ={avatarStyle}> <LockOutlinedIcon /> </Avatar>
               <h2> Create Account </h2>
               </Grid>
               <TextField label='Username' variant="standard" placeholder='Enter Username' fullWidth required/> 
               <TextField label='Email' variant="standard" placeholder='Enter Email' fullWidth required/> 
               <TextField label='Password' variant="standard" placeholder='Enter Password' type ='password' fullWidth required/> 
               <Link to='/UserInfo'> <p style={greenText}> NEXT! </p> </Link>
                <Grid align="center">
                    <Button variant="contained" color="primary" style ={btstyle}  fullWidth>
                        <Link to='/UserInfo'> <p style={greenText}> NEXT! </p> </Link>
                        {/* <Link to="/UserInfo">
                        <p style={whiteText} >  Next </p>
                        </Link> */}
                    </Button>

                    
               </Grid>
              
               


            </Paper>
        </Grid>
        // <div className = 'pages-container'>
        //     <>
        //     <input type="text" placeholder="Email" />
        //     <input type="text" placeholder="username" />
        //     <input type="text" placeholder="password" />
        //     <Link to='/UserInfo'>NEXT!</Link>



            
        //     </>



           
        // </div>




    )
}

export default CreateAccount
