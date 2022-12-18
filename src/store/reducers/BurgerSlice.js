import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false
}

export const burgerSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        handleBurger(state) {
            state.isActive = !state.isActive
        }
    }
})

export default burgerSlice.reducer