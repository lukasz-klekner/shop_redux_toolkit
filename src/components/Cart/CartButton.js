import { useDispatch, useSelector } from 'react-redux'

import { toggle } from '../../redux/slices/uiSlice'
import classes from './CartButton.module.css'

const CartButton = (props) => {
  const { totalQuantity } = useSelector(({ cart }) => cart)
  const dispatch = useDispatch()

  const toggleHandler = () => dispatch(toggle())

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton
