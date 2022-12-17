import React from 'react';
import {Link} from 'react-router-dom';
import '../Cards.css';
function CardItem({src, text, path, label}) {
  return (
    <>
    <li className="cards__item">
        <Link className='cards__item__link' data-category={label}>
            <figure className="cards__item__pic-wrap">
                <img src={src} alt="Certi 1" className="cards__item__img" />
            </figure>
            <div className="cards__item__info">
                <h5 className="cards__item__text">{text}</h5>
            </div>
        </Link>
    </li>
    </>
  )
}

export default CardItem