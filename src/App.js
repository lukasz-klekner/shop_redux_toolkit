import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'

import { sendCartData } from './redux/slices/cartSlice'

let isInitial = true

function App() {
  const { isCartVisible, notification } = useSelector(({ ui }) => ui)
  const { items } = useSelector(({ cart }) => cart)

  const dispatch = useDispatch()

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(items))
  }, [items])

  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
