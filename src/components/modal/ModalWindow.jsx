import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleModal } from '../../store/reducers/ActionCreators'
import { Button } from '../../ui'

import './modal-window.scss'


function ModalWindow() {
  const navigate = useNavigate()
  const isModal = useSelector(state => state.modalReducer.isActive)

  const dispatch = useDispatch()
  const handleCancel = () => dispatch(handleModal())

  const handleConfirm = () => {
    navigate('/portfolio/cli')
    handleCancel()
  }

  return (
    <div className={isModal ? 'modal active' : 'modal'}>
      <div className="modal-inner">
        <div className='modal-inner_prompt'>Do you want to close GUI?</div>
        <div className='modal-inner_action'>
          <Button onClick={handleConfirm}>Yes</Button>
          <Button onClick={handleCancel} type='secondary'>Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow