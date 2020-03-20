import React, {useContext, useReducer} from 'react'
import CartContext from './CartContext'

interface Products {
  id: number
  name: string
  price: number
}

interface Cart {
  products: string[]
  shipping_value?: number
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppContext: React.FC = () => {
  const {products} = useContext(CartContext)

  return (
    <ul>
      {products?.map(p => (
        <li>{p.name}</li>
      ))}
    </ul>
  )
}

export default AppContext
