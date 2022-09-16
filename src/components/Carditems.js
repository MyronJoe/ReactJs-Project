import React from 'react'
import { Link } from 'react-router-dom'

function Carditems(props) {
    return (
        <>
            <li className='cards_items'>
                <Link to={props.path} className='cards_item_link'>
                    <figure className='cards_item_pic_wrap'>
                        <img src={props.src} alt='ProjectImage' className='cards_item_img' />
                        <small className='cards_item_label'>{props.label}</small>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Carditems