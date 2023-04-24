import '../styles/Content.css';
import React from 'react';
import { BsFillStarFill } from "react-icons/bs";

function Content(props) {
  const { label, image, location, service, pricing, person } = props.item;

  return (
    <div className='content-container'>
      <div className='div-content'>
        <div className='div-each-picture-plus-content'>
          <img className='img-content' src={require(`../images/photo-${image}.png`)} alt={`require(${image})`} />
          <div className='star-quant-orig'>
            <div><BsFillStarFill className='star-icon' /> {props.item.stats.rating}</div>
            <div>({props.item.stats.review_count})</div>
            <div>-{location}</div>
          </div>

          <p className='para-service'>{service}</p>

          <div className='div-pricing-person'>
            <p className='para-price'>From {pricing}</p>
            <p className='para-person'>{person}</p>
            <span className='card-badge'>
              {label}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
