import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:"quote",
    initialState:{
        randomQuote:[],
        allTags:[],
        isBookMarked:false,
    },
    reducers:{
        onchangeTag(state,action){
            state.randomQuote=action.payload;
        },
        addAlltags(state,action){
            state.allTags=action.payload;
        },
        changeBookMarkBtn(state,action){
            state.isBookMarked=action.payload;
        }
    }
})

export {quoteSlice};
export const {onchangeTag,addAlltags,changeBookMarkBtn}=quoteSlice.actions