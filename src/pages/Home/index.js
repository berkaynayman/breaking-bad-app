//react-mesonory-css kullanılabilir
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getCharacters} from "../../redux/charactersSlice"
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

import './style.css'

function Home() {
    const characters = useSelector((state) => state.characters.items)
    const nextPage   = useSelector((state) => state.characters.page)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const isLoading  = useSelector((state) => state.characters.isLoading)
    const error      = useSelector((state) => state.characters.error)

    const dispatch = useDispatch()
    console.log(characters);
    
    useEffect(() =>{
        dispatch(getCharacters())
    },[dispatch])

    if(error){
        return <Error message={error}/>
    }

    return (
        <>
            <div className='cards'>
                {
                    characters.map(item => (
                            (item != "") && 
                            <div className='card'>
                                <img src={item.img} alt={item.name}/>
                                <h3 className='name'>{item.name}</h3>
                            </div>
                    ))
                }
            </div>

            <div>
                {isLoading && <Loading />}
                {hasNextPage && !isLoading && 
                <button onClick={() => dispatch(getCharacters(nextPage))}> Lead More ({nextPage}) </button>}

                {
                    !hasNextPage && <div>There is nothing be on show.</div>
                }
            </div>
        </>
    )
}

export default Home
