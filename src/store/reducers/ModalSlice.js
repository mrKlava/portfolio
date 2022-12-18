import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false
}

export const modalSlice = createSlice({
    name: 'modalWindow',
    initialState,
    reducers: {
        handleModal(state) {
            state.isActive = !state.isActive
        }
    }
})

export default modalSlice.reducer