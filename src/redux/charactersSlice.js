import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const CHAR_LIMIT = 12
export const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
    const res = await axios(`https://breakingbadapi.com/api/characters?limit=${CHAR_LIMIT}`)
    return res.data
})

export const charactersSlice = createSlice({
    name:"characters",
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers:{
        [getCharacters.pending]: (state, action) => {
            state.isLoading = true
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [getCharacters.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        }
    }
});

export default charactersSlice.reducer;