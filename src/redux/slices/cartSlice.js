import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  changed: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemToAdd = action.payload
      const existingItem = state.items.find((item) => itemToAdd.id === item.id)
      state.totalQuantity++
      state.changed = true

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
      state.changed = true

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== idToRemove)
      } else {
        existingItem.quantity--
      }
    },
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
  },
})

export const { addItemToCart, removeItemFromCart, replaceCart } =
  cartSlice.actions
export default cartSlice.reducer
