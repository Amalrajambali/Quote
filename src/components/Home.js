import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { addBookmark,removeBookmark, onchangeTag ,changeBookMarkBtn} from '../store'
import { BsBookmarkCheckFill,BsBookmarkX } from "react-icons/bs";

function Home({changeQuote,getRandomQuote}) {

    const dispatch=useDispatch()

    const {randomQuote,allTags,isBookMarked}=useSelector((state)=>{
        return state.quote
    })


    const renderTags=allTags.map((tag)=>{
        return <option>{tag.name}</option>
    })

    async function changeOption(e){
        const tag=await changeQuote(e.target.value);
        dispatch(changeBookMarkBtn(false))
        const newTag=tag[0];
        if(newTag){
        dispatch(onchangeTag(newTag))
        }
        else{
            alert("No Quotes found")
        }
    }

    const bookmarkHandler=(e)=>{
        if(!isBookMarked)
        {
            dispatch(addBookmark(randomQuote))
            dispatch(changeBookMarkBtn(!isBookMarked))
        }
        else{
            dispatch(removeBookmark(randomQuote))
            dispatch(changeBookMarkBtn(!isBookMarked))
        }
    }

    const changeRandomQuote=()=>{
        dispatch(changeBookMarkBtn(false))
        getRandomQuote();
    }

  return (
    <div className='home-container'>

         <div class="card">
            <div class="card-body">
                <p>{randomQuote.content}</p>
                <br></br>
                <span className='bookmar-content'>
                    <p class="blockquote-footer"> - {randomQuote.author}</p>
                    <button  className='bookmark-btn' onClick={bookmarkHandler}>
                     {isBookMarked?<BsBookmarkCheckFill/>:<BsBookmarkX/>}
                    </button>
                </span>
            </div>
            </div>
       
        <div className='list-tags card'>
           <select onChange={changeOption}>
            <option>Select the tag</option>
                 {renderTags}
           </select>
        </div>

        <div className='button-nxt'>
            <button className='nxt-btn' onClick={changeRandomQuote} >Next Quote</button>
        </div>

    </div>
  )
}

export default Home