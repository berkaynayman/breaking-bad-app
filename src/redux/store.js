import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from "./charactersSlice.js";

export const store = configureStore({
    reducer: {
        characters: charactersSlice
    }
})