import React from 'react'
import Home from '../Home'
import axios from "axios"

function HomePage({getRandomQuote}) {
  
    async function changeQuote(tagName)
    {
        const response =await axios.get(`https://api.quotable.io/quotes/random?tags=${tagName}`)
        return response.data
    }

  return (
    <div>
        <Home changeQuote={changeQuote} getRandomQuote={getRandomQuote} />
    </div>
  )
}

export default HomePage