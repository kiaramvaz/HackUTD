import React from 'react'
import { Button } from './Button'
import '../App';
import './InfoSection.css';

const infoSection = () => {
    const onClick1 = () => {
        var x = document.getElementById("test");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <div className="info-container">
            <h1>
                The Association for Computing Machinery (ACM)
                {/* name of club here */}
            </h1>
            <p id="test">
                The Association for Computing Machinery (ACM) is a US-based international 
                learned society for computing. It was founded in 1947 and is the world's largest 
                scientific and educational computing society. ... The ACM is an umbrella organization
                for academic and scholarly interests in computer science (informatics).
            </p>
            <div className="info-btns">
                <Button className='btns' buttonStyle='btns--outline'
                    buttonSize='btn--large'  >  
                    More Info
                    
                </Button>

                <Button className='btns' buttonStyle='btns--outline'
                    buttonSize='btn--large' onClick = {onClick1} > Requirements </Button>

                <Button className='btns' buttonStyle='btns--outline'
                    buttonSize='btn--large'  > How to Apply/Join </Button>
            </div>
        </div>
    )
}

export default infoSection
