import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { removeBookmark ,changeBookMarkBtn} from '../store';

function Bookmark() {

    const dispatch=useDispatch();
    const bookmarks=useSelector(state=>{
        return state.bookmark;
    })

    const bookmarkHandler=(item)=>{
         dispatch(changeBookMarkBtn(false))
;        dispatch(removeBookmark(item._id))
    }

    const renderBookmarks=bookmarks.map((item)=>{
        return (
            <div class="card" style={{padding: "3px",marginTop:"5px"}}>
            <div class="card-body">
                <p>{item.content}</p>
                <br></br>
                <span className='bookmar-content'>
                    <p class="blockquote-footer"> - {item.author}</p>
                    <button  className='bookmark-btn' onClick={()=>bookmarkHandler(item)}>
                       <AiFillDelete/>
                    </button>
                </span>
                </div>
                </div>

        )
    })

  return (
    <div>
         <h2 style={{justifyContent:"center",display:"flex"}}><u>All Bookmarks</u></h2>
                {renderBookmarks || "Nothing in Bookmar"}
          
    </div>
  )
}

export default Bookmark