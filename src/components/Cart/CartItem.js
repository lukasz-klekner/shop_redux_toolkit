import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../redux/slices/cartSlice'

import classes from './CartItem.module.css'

const CartItem = (props) => {
  const dispatch = useDispatch()

  const { title, quantity, total, price, id } = props.item

  const addItemToCartHandler = () =>
    dispatch(
      addItemToCart({
        id,
        title,
        price,
      })
    )

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button onClick={addItemToCartHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
