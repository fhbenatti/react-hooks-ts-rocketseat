import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useReducer
} from 'react'

interface User {
  name: string
  login: string
  avatar_url: string
}

interface Cart {
  products: string[]
  shipping_value?: number
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppHooksBasics: React.FC = () => {
  const [userName, setUserName] = useState<string>('fhbenatti')
  const [user, setUser] = useState<User>()
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function loadData() {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      const data = await response.json()
      setUser(data)
    }
    console.log('load data')
    loadData()
  }, [userName])

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), [])

  const concatInfo = useMemo(() => 'User: ' + user?.name ?? '', [user])

  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch (action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          }
        default:
          return state
      }
    },
    {
      products: ['default'],
      shipping_value: 0
    }
  )

  function handleFindUser() {
    setUserName(inputRef.current?.value.toString() ?? 'fhbenatti')
    console.log(inputRef.current?.value)
  }

  inputRef.current?.focus()
  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.login}</p>
      <p>{user?.avatar_url}</p>
      <p>{concatInfo}</p>
      <form action="">
        <input defaultValue={userName} type="text" ref={inputRef} />
      </form>
      <button onClick={handleFindUser}>Buscar usuário</button>
    </div>
  )
}

export default AppHooksBasics
