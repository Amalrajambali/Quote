import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice=createSlice({
    name:"bookmark",
    initialState:[],
    reducers:{
        addBookmark(state,action){
            state.push(action.payload);
        },
        removeBookmark(state,action){  
            const filterBookmark=state.filter(item=>item._id!==action.payload)
            return filterBookmark;
        }
    }
})

export {bookmarkSlice};
export const {addBookmark,removeBookmark}=bookmarkSlice.actions