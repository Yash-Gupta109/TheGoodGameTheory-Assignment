import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    saved: [{id: 1, quote: "Made with ❤️ By Yash Gupta"}]
}

export const savedSlice = createSlice({
    name: "quotes",
    initialState,
    reducers:{
        addQuote: (state, action) => {
            const quotes = {
                id : nanoid(),
                quote: action.payload
            }
            state.saved.push(quotes)
        },
        removeQuote: (state, action) => {
            state.saved = state.saved.filter((q)=> q.id !== action.payload)
        }
    }
})

export const {addQuote, removeQuote} = savedSlice.actions
export default savedSlice.reducer