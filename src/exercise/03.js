// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext()

function CountProvider({children}) {
  const [count, setCount] = React.useState(0);
  const value = {count, setCount};
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }

  return context;
}

function CountDisplay() {
  const {count} = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
        <CountDisplay />
        <Counter />
    </div>
  )
}

export default App
