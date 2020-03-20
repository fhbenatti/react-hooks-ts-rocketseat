import React, {useState, useEffect, useMemo, useCallback, useRef} from 'react'

interface User {
  name: string
  login: string
  avatar_url: string
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>()
  const inputRef = useRef<HTMLInputElement>(null)

  async function loadData() {
    const response = await fetch('https://api.github.com/users/fhbenatti')
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    loadData()
  })

  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), [])

  const concatInfo = useMemo(() => user?.name + ' user' ?? '', [user])

  inputRef.current?.focus()

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.login}</p>
      <p>{user?.avatar_url}</p>
      <p>{concatInfo}</p>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  )
}

export default App
