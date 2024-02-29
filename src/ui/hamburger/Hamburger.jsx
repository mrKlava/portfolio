import { useDispatch, useSelector } from "react-redux"
import { handleBurger } from '../../store/reducers/ActionCreators'

import "./hamburger.scss"


function Hamburger() {
  const isBurger = useSelector(state => state.burgerReducer.isActive)

  const dispatch = useDispatch()
  const handleClick = () => dispatch(handleBurger())

  return (
    <div
      className={!isBurger ? "hamburger" : "hamburger active"}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger