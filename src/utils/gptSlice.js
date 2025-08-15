import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: 'gpt',
    initialState: {
     showGptSearch: false,
    },
    reducers:{
        toggleGptSearchView: (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const { toggleGptSearchView } = gtpSlice.actions;
export default gtpSlice.reducer;