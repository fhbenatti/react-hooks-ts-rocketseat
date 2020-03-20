import {createContext} from 'react'

interface Products {
  id: number
  name: string
  price: number
}

interface Cart {
  products?: Products[]
  shipping_value?: number
}

const CartContext = createContext<Cart>({
  products: [],
  shipping_value: 0
})

export default CartContext
