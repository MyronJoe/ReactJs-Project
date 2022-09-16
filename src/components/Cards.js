import React from 'react'
import Carditems from './Carditems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our reacent project</h1>
            <div className='cards_container'>
                <div className='card_wrapper'>
                    <ul className='cards_items'>
                        <Carditems
                            src='images/work-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <Carditems
                            src='images/photo-4.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Project Illustration'
                            path='/services'
                        />
                        <Carditems
                            src='images/work-3.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Work Setup'
                            path='/services'
                        />

                    </ul>
                    <ul className='cards_items'>
                        <Carditems
                            src='images/work-2.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <Carditems
                            src='images/testi-1.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Project Illustration'
                            path='/services'
                        />
                        <Carditems
                            src='images/counters-bg.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon jungle'
                            label='Work Setup'
                            path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards