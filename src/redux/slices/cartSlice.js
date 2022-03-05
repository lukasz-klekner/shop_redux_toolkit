import { createSlice } from '@reduxjs/toolkit'

import { showNotification } from './uiSlice'

const initialState = {
  items: [],
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload
      const existingItem = state.items.find((item) => itemToAdd.id === item.id)
      state.totalQuantity++

      if (!existingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalPrice: itemToAdd.price,
          name: itemToAdd.title,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += itemToAdd.price
      }
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload
      const existingItem = state.items.find((item) => idToRemove === item.id)
      state.totalQuantity--

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== idToRemove)
      } else {
        existingItem.quantity--
      }
    },
  },
})

export const sendCartData = (cart) => async (dispatch) => {
  dispatch(
    showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  )

  const sendRequest = async () => {
    const respone = await fetch(
      'https://shop-redux-b6741-default-rtdb.firebaseio.com/cart.json',
      {
        method: 'PUT',
        body: JSON.stringify(cart),
      }
    )

    if (!respone.ok) {
      throw new Error('Sending cart data failed.')
    }
  }

  try {
    await sendRequest()

    dispatch(
      showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    )
  } catch (error) {
    dispatch(
      showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    )
  }
}

export const { addItemToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
