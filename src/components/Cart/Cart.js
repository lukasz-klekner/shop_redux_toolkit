import { useSelector } from 'react-redux'

import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {
  const { items } = useSelector(({ cart }) => cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(({ id, name, quantity, price, totalPrice }) => (
          <CartItem
            key={id}
            item={{ title: name, quantity, total: totalPrice, price }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
