import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { onchangeTag } from '../store'

function Home({changeQuote}) {

    const dispatch=useDispatch()

    const {randomQuote,allTags}=useSelector((state)=>{
        return state.quote
    })

    const renderTags=allTags.map((tag)=>{
        return <option>{tag.name}</option>
    })

    async function change(e){
        const tag=await changeQuote(e.target.value)
        const newTage=tag[0]
        dispatch(onchangeTag(newTage))
    }

  return (
    <div className='home-container'>

         <div class="card">
            <div class="card-body">
                <p>{randomQuote.content}</p>
                <br></br>
                <p class="blockquote-footer"> - {randomQuote.author}</p>
            </div>
            </div>
       
        <div className='list-tags card'>
           <select onChange={change}>
            <option>Select the tag</option>
                 {renderTags}
           </select>
        </div>

        <div className='button-nxt'>
            <button>Next Quote</button>
        </div>

    </div>
  )
}

export default Home