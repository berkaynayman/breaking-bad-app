import React from 'react'
import './style.css'

import {Link} from "react-router-dom"
function Item({item}) {
    return (
        <Link to={`/quotes/${item.quote_id}`} className='quote_item'>
            <q>{item.quote}</q> <strong> - {item.author.toUpperCase()}</strong>
        </Link>
    )
}

export default Item