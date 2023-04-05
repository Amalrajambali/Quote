import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice=createSlice({
    name:"bookmark",
    initialState:[],
    reducers:{
        addBookmark(state,action){
            state.push(action.payload);
        },
        removeBookmark(state,action){
            state.splice(action.payload,1);
        }
    }
})

export {bookmarkSlice};
export const{addBookmark,removeBookmark}=bookmarkSlice.actions