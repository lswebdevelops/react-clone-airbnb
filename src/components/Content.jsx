import  '../styles/Content.css';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs";

 export default function Content(props){
    return(
        <div className='content-container'>
            <div className='div-content'>
                    <div className='div-each-picture-plus-content'>
                    <img className='img-content' src={require(`../images/photo-${props.item.image}.png`)} alt={`require(${props.item.image})`} />
                    <div className='star-quant-orig'>
                        <div><BsFillStarFill className='star-icon' /> {props.item.rating}</div>
                        <div>({props.item.review_count})</div>
                        <div>-{props.item.location}</div>
                    </div>

                    <p className='para-service'>{props.item.service}</p>

                    <div className='div-pricing-person'>
                        <p className='para-price'>From {props.item.pricing}</p>
                        <p className='para-person'>{props.item.person}</p>
                    <span className='card-badge'>
                        {props.item.label}
                    </span>
                    </div>

                    </div>
            </div>
       </div>
    )
 }
