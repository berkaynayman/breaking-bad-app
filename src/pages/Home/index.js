//react-mesonory-css kullanılabilir
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getCharacters} from "../../redux/charactersSlice"
import Loading from '../../Components/Loading'
import Error from '../../Components/Error'
import {Link} from "react-router-dom"

import './style.css'

function Home() {
    const characters  = useSelector((state) => state.characters.items)
    const nextPage    = useSelector((state) => state.characters.page)
    const hasNextPage = useSelector((state) => state.characters.hasNextPage)
    const status      = useSelector((state) => state.characters.status)
    const error       = useSelector((state) => state.characters.error)

    const dispatch = useDispatch()
    
    /*sayfalama yaptığımız için bu sayfaya geri dönüyoruz
    ve her geri döndüğüm zaman getCharactersin çalışması
    iyi bir durum değil. bu yüzden status değişkeninden
    yardım alarak bu sorunu çözüyoruz*/
    useEffect(() =>{
        if(status === 'idle'){
            dispatch(getCharacters())
        }
    },[dispatch, status])

    if(status === 'failed'){
        return <Error message={error}/>
    }

    return (
        <>
            <div className='cards'>
                {
                    characters.map((item,index) => (
                            (item !== "") &&
                                <Link to={`char/${item.char_id}`} className='card' key={index}>
                                    <img src={item.img} alt={item.name}/>
                                    <h3 className='name'>{item.name}</h3>
                                </Link>
                    ))
                }
            </div>

            <div>
                {status === 'loading' && <Loading />}
                {hasNextPage && status !== 'loading' && 
                <button onClick={() => dispatch(getCharacters(nextPage))}> Lead More ({nextPage}) </button>}

                {
                    !hasNextPage && <div>There is nothing be on show.</div>
                }
            </div>
        </>
    )
}

export default Home
