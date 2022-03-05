import { useSelector } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

function App() {
  const { isCartVisible } = useSelector(({ ui }) => ui)

  console.log(isCartVisible)
  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
