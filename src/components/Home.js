import React from 'react'
import {useSelector} from "react-redux"

function Home() {

    useSelector((state)=>{
        console.log(state.quote.randomQuote)
    })

  return (
    <div className='home-container'>
         <div class="card">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <p class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></p>
            </div>
            </div>
        <div className='list-tags card'>
           <select>
            <option>hii</option>
           </select>
        </div>
        <div className='button-nxt'>
            <button>Next Quote</button>
        </div>
    </div>
  )
}

export default Home