import React from 'react'
import { Button } from './Button'
import '../App';
import './HeroSection.css';


const HeroSection = () => {
    return (
        <div className = 'hero-container'>

            <h1> ADVENTIREoefkf</h1>
            <p> What aregddjvk</p>
            <div className= "hero-btns"> </div>
            <Button className='btns' buttonStyle='btns--outline'
                buttonSize='btn--large'  > GET STARTED </Button>

            <Button className='btns' buttonStyle='btns--primary'
                buttonSize='btn--large'  > WATCH TRAILER <i className = 'far fa play circle'/> 
                </Button>

        </div>
    )
}

export default HeroSection
