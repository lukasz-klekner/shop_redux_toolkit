import { createSlice } from '@reduxjs/toolkit'

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
  },
})

export const { addItemToCart } = cartSlice.actions
export default cartSlice.reducer
