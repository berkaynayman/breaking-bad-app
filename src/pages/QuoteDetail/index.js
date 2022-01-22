import React from 'react'

import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

function QuoteDetail() {
    const { quote_id } = useParams()
    console.log(quote_id); 

    //const items = useSelector(quotesSelector)
    //const quote = items.find((item) => item.quote_id === Number(quote_id))
    const quote = useSelector((state) => state.quotes.items.find(item => item.quote_id === Number(quote_id)))

    return (
        <div>
            QuoteDetail
            <pre>
                {JSON.stringify(quote, null, 2)}
            </pre>
        </div>
    )
}

export default QuoteDetail
