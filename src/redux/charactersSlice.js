import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

const CHAR_LIMIT = 12
export const getCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`https://breakingbadapi.com/api/characters?limit=${CHAR_LIMIT}&offset=${page * CHAR_LIMIT}`)
    return res.data
})

export const charactersSlice = createSlice({
    name:"characters",
    initialState: {
        items: [],
        isLoading: false,
        page: 0,
        hasNextPage: true
    },
    reducers: {},
    extraReducers:{
        [getCharacters.pending]: (state) => {
            state.isLoading = true
        },
        [getCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload]
            state.isLoading = false
            state.page += 1

            if(action.payload.length < 12){ state.hasNextPage = false }

        },
        [getCharacters.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        }
    }
});

export default charactersSlice.reducer;