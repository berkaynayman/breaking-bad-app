import {useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchAllQuotes, quotesSelector, statusSelector, errorSelector }from "../../redux/quotesSlice.js"

import Error from '../../Components/Error.js'
import Loading from '../../Components/Loading.js'
import Item from './Item'
function Quotes() {
    const dispatch = useDispatch()
    const data = useSelector(quotesSelector)
    const status = useSelector(statusSelector)
    const error = useSelector(errorSelector)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllQuotes())
        }
    }, [dispatch, status])
    if (error) {
        return <Error message={error} />
    }

    return (
        <div>
            {
                status === 'loading' && <Loading />
            }
            Quotes
            {
                status === 'succeeded' && data.map(item => <Item key={item.quote_id} item={item}/>)
            }
            {
                status === 'succeeded' && <h1 className='quotes_info'>{data.length} quotes.</h1>
            }
        </div>
        
    )
}

export default Quotes