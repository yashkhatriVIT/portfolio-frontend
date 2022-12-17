import React from 'react'
import CardItem from './Items/CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1>Accomplishments</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="/images/SQL.png"
                    text="Wxplore the hidden waterfall deep inside the waterfall jungle"
                    label="Adventure"
                    path="/skills"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="/images/Algo.png"
                    text="Wxplore the hidden waterfall deep inside the waterfall jungle"
                    label="Adventure"
                    path="/skills"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="/images/oops.png"
                    text="Wxplore the hidden waterfall deep inside the waterfall jungle"
                    label="Adventure"
                    path="/skills"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="/images/React.png"
                    text="Wxplore the hidden waterfall deep inside the waterfall jungle"
                    label="Adventure"
                    path="/skills"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards