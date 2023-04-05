import React from 'react'
import {useSelector} from "react-redux"

function Home() {

    const {randomQuote,allTags}=useSelector((state)=>{
        return state.quote
    })

    const renderTags=allTags.map((tag)=>{
        return <option>{tag.name}</option>
    })

  return (
    <div className='home-container'>
        
         <div class="card">
            <div class="card-body">
                <p>{randomQuote.content}</p>
                <p class="blockquote-footer"> - {randomQuote.author}</p>
            </div>
            </div>
       
        <div className='list-tags card'>
           <select>
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