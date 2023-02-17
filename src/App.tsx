import AutoInput from './components/AutoInput'
import Counter from './components/Counter'
import MainLayout from './components/layouts/MainLayout'
import Manager from './components/Manager'
import ProductList from './components/ProductList'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className='App'>
      {/* useReducer */}
      {/* <Counter /> */}

      {/* useContext */}
      {/* <Welcome /> */}

      {/* useImperativeHandle */}
      {/* <AutoInput /> */}

      {/* useDeferredValue && startTransition && useTransition*/}
      {/* <ProductList /> */}

      {/* React Portal */}
      <MainLayout>
        <Manager />
      </MainLayout>
    </div>
  )
}

export default App
