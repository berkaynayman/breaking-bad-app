//react-mesonory-css kullanılabilir
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getCharacters} from "../../redux/charactersSlice"
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'

import './style.css'

function Home() {
    const characters = useSelector((state) => state.characters.items)
    const isLoading  = useSelector((state) => state.characters.isLoading)
    const error      = useSelector((state) => state.characters.error)

    const dispatch = useDispatch()
    console.log(characters);
    
    useEffect(() =>{
        dispatch(getCharacters())
    },[])

    if(isLoading){
        return <Loading />
    }
    if(error){
        return <Error message={error}/>
    }

    return (
        <div className='cards'>
            {
                characters.map(item => (
                    <div className='card'>
                        <img src={item.img}/>
                        <h3 className='name'>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default Home
