import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:"quote",
    initialState:{
        randomQuote:[],
        allTags:[]
    },
    reducers:{
        onchangeTag(state,action){
            state.randomQuote=action.payload;
        },
        addAlltags(state,action){
            state.allTags=action.payload;
        }
    }
})

export {quoteSlice};
export const {onchangeTag,addAlltags}=quoteSlice.actions