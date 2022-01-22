import React from 'react'
import './style.css'
function Item({item}) {
    return (
        <div className='quote_item'>
            <q>{item.quote}</q> <strong> - {item.author.toUpperCase()}</strong>
        </div>
    )
}

export default Item
