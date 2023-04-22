import  '../styles/Content.css';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs";

class Content extends React.Component{
    render(){
        return(
            <div className='content-container'>
        
                <div className='div-content'>
                        <div className='div-each-picture-plus-content'>
                        <span className='label-img'>
                            {this.props.label}
                        </span>
                        <img className='img-content' src={require(`../images/photo-${this.props.image}.png`)} alt={`require(${this.props.image})`} />
                        <div className='star-quant-orig'>
                            <div><BsFillStarFill className='star-icon' /> {this.props.rating}</div>
                            <div>({this.props.quantity})</div>
                            <div>-{this.props.origin}</div>
                        </div>

                        <p className='para-service'>{this.props.service}</p>

                        <div className='div-pricing-person'>
                            <p className='para-price'>From {this.props.pricing}</p>
                            <p className='para-person'>{this.props.person}</p>
                        </div>

                        </div>
                </div>
           </div>
        )

    }
}


export default Content;
