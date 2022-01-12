import React from 'react'
import { Provider } from 'react-redux'

// Components
import Categories from './components/Categories'

// Store
import generateStore from './redux/store'


const App = () => {

  const store = generateStore()
  return (
    <Provider store={store}>
      <Categories />
    </Provider>
  )
}

export default App

