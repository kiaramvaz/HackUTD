import React from 'react'
import { Button } from './Button'
import '../App';
import './HeroSection.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

import {Grid, Paper, Avatar, TextField } from '@material-ui/core';  


const HeroSection = () => {
    const paperStyle = {padding: 20, height:'70vh', width:380,  }
    const avatarStyle = {backgroundColor: '#f9b562'} 
    const btstyle = {margin: '8px 0', backgroundColor: '#285943', color: "white", margin: "20px"}
    const whiteText = {color: 'white'}
    const greenText = {color: '#285943', margin: "20px ", }
    return (
        <div className = 'hero-container'>
            
            <h1> FIND A CLUB FOR YOU NOW</h1>
           
            <div className= "hero-btns"> </div>
            <SearchBar >  </SearchBar>

            <div>
            <Button variant="contained" color="primary" style ={btstyle}  fullWidth>
                        <Link to='/searchClubs'> <p style={greenText}> SEARCH!!!! </p> </Link>
                        {/* <Link to="/UserInfo">
                        <p style={whiteText} >  Next </p>
                        </Link> */}
                    </Button>

                    </div>

            
            
            

        </div>
    )
}

export default HeroSection
