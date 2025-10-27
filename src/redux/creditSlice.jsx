import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    creditsLeft: "Loading",
};

const creditSlice = createSlice({
    name: "credit",
    initialState,
    reducers: {
        decreaseCredits: (state, action) => {
            state.creditsLeft -= action.payload;
        },
        increaseCredits: (state, action) => {
            state.creditsLeft += action.payload;
        },
        showCredit: (state, action) => {
            state.creditsLeft = action.payload;
        },
    
    },
});

export const { decreaseCredits,increaseCredits ,showCredit} = creditSlice.actions;
export default creditSlice.reducer;
