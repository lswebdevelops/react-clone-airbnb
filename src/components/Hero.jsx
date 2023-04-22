import '../styles/Hero.css';
import React from 'react';
import hero_img_page from '../images/airbngpage.jpg'

class Hero extends React.Component{
    render(){
        return(
           
            <div className='hero-container'>
            <div className='hero-img-container'>
                <img className='hero-img-page' src={hero_img_page} alt="" />
            </div>
            <h1 className='hero-h1'>Online Experience</h1>
            <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts-all without leving home.</p>
        </div> 
        
        )
    }
}

export default Hero;
