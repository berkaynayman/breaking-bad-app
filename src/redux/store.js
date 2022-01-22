import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from "./charactersSlice.js";
import quotesSlice from "./quotesSlice.js"

export const store = configureStore({
    reducer: {
        characters: charactersSlice,
        quotes    : quotesSlice
    }
})