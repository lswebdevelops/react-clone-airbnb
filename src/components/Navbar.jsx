import  '../styles/Navbar.css';
import React from 'react';
import airbnbLogo from '../images/pngairbnb.png'

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <img
                className='nav-logo'
                 src={airbnbLogo}
                 alt='people'/>
           
            </nav>
        )
    }
}


export default Navbar;
