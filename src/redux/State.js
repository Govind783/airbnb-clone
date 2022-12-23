import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react";


const counterSlice = createSlice({
    name: "add",
    initialState: { value: 0 },
    reducers: {
        increaseCount(state) {
            state.value++;
        },

        decrementCount(state) {
            if (state.value <= 0) {
                return
            }

            else {
                state.value--;

            }
        }

    }
})



const store = configureStore({ reducer: { counter: counterSlice.reducer } });

export default store;
export const counterActions = counterSlice.actions;