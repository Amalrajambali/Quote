import React, { useEffect } from 'react'
import Home from '../Home'
import axios from "axios"
import {useDispatch} from "react-redux"
import { onchangeTag ,addAlltags} from '../../store';

function HomePage() {

    const dispatch=useDispatch();

    useEffect(()=>{
        axios.get("https://api.quotable.io/random").then((response)=>dispatch(onchangeTag(response.data)))
        axios.get("https://api.quotable.io/tags").then(response=>dispatch(addAlltags(response.data)))
    },[])

  return (
    <div>
        <Home/>
    </div>
  )
}

export default HomePage