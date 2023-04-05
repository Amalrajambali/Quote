import { createSlice } from "@reduxjs/toolkit";

const quoteSlice=createSlice({
    name:"quote",
    initialState:{
        randomQuote:[],
        Alltags:[]
    },
    reducers:{
        onchangeTag(state,action){
            state.randomQuote=action.payload;
        },
        addAlltags(state,action){
            state.Alltags=action.payload;
        }
    }
})

export {quoteSlice};
export const {onchangeTag,addAlltags}=quoteSlice.actions