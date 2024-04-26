import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    // true for ascending
    // false for descending

    priceSort: true,
    yearSort: true,
}

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers: {
        togglePriceSort: (state) => {
            state.priceSort = !state.priceSort
        },

        toggleYearSort: (state) => {
            state.yearSort = !state.yearSort;
        }
    }
})


export const { togglePriceSort, toggleYearSort } = sortSlice.actions;
export default sortSlice.reducer;