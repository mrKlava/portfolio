import { burgerSlice } from "./BurgerSlice"
import { modalSlice } from "./ModalSlice"

export const handleBurger = () => (dispatch) => {
    dispatch( burgerSlice.actions.handleBurger())
}

export const handleModal = () => (dispatch) => {
    dispatch( modalSlice.actions.handleModal())
}
