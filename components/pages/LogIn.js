import UserInfo from './UserInfo';
import UserPage from './UserPage';
import React, { handleChange, state } from 'react';
//import { Link } from 'react-router-dom'; 
import {Grid, Paper, Avatar, TextField } from '@material-ui/core';  
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import {Spring} from 'react-spring';

import './Pages.css';
import Button from '@mui/material/Button';

function LogIn() {
    const paperStyle = {padding: 20, height:'70vh', width:380, margin: "20px auto" }
    const avatarStyle = {backgroundColor: '#f9b562'} 
    const btstyle = {margin: '8px 0', backgroundColor: '#285943'}
    const whiteText = {color: 'white'}
    const greenText = {color: '285943'}
    return (

        <Grid className='Background'> 
            <Spring
                from={{ opacity: 0 }}
                to={{ opcaity: 0}}
                config={{ delay: 1000, duration: 1000}}
            >
                { props => (
            <div style={props}>
            <Paper elevation ={10} style = {paperStyle}>
                <Grid align = "center">  
               <Avatar style ={avatarStyle}> <LockOutlinedIcon /> </Avatar>
               <h2> Sign In </h2>
               </Grid>
               <TextField label='Username' variant="standard" placeholder='Enter Username' fullWidth required/> 
               <TextField label='Password' variant="standard" placeholder='Enter Password' type ='password' fullWidth required/> 
               <FormControlLabel
               control={
                   <Checkbox

                   name= "checkedB"
                   color = "primary"
                   /> 
               }
               label ="Remember Me"

               />
                <Grid align="center">
                    <Button variant="contained" color="primary" style ={btstyle}  fullWidth>
                        <Link to="/userPage">
                        <p style={whiteText} > SIGN IN </p>
                        </Link>
                    </Button>
               {/* <Link className= "buttonLink" to='/userPage'> <h2> SIGN IN </h2> </Link> */}
               </Grid>
               <Typography > 
                   <Link  href = "#" > 
                       <p style={greenText} > Forgot password? {" "} </p>
                        </Link>
               </Typography> 

               <Typography style={greenText} >  Do you have an acount? 
                   <Link  href = "#" to="/createAccount" >
                       <p style={greenText}> Sign Up </p>
                        </Link>
               </Typography> 
              
               


            </Paper>
            </div>
                )}
            </Spring>
        </Grid>
        // <div className = 'pages-container'>
        //     <> 
        //     <input type="text" placeholder="username" />
        //     <input type="text" placeholder="password" />
        //     <Link to='/userPage'>Login</Link>
        //     </>

 

        //     <>
        //         OR
        //         <Link to='/createAccount'>CREATE ACCOUNT</Link>

        //     </>

        // </div>




    )
}

export default LogIn 
