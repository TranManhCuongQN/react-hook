import React, { useReducer, useState } from 'react'
import reducer, { init, initalState } from '../reducer/reducer'
import { decreaseAgeAction, increaseAgeAction, increaseXAction } from '../reducer/actions'

const Counter = () => {
  // const [state, setState] = useState<{ age: number }>({ age: 0 })

  // Khi truyền như thế này thì useReducer nó gọi lần đầu thì nó sẽ gọi init này. Init này sẽ truyền initialState vào trong init. Bây giờ giá trị khởi tạo ko còn initialState nữa mà nó tính toán trong init và return về giá trị mới
  const [state, dispatch] = useReducer(reducer, initalState, init)

  init(initalState)

  const increaseAge = () => {
    // setState((prev) => ({ ...prev, age: prev.age + 1 }))

    // action thường là object
    dispatch(increaseAgeAction())

    // Muốn lấy giá trị hiện tại sau khi dispatch
    const nextState = reducer(state, increaseAgeAction())
    console.log(nextState.age)
  }

  const decreaseAge = () => {
    dispatch(decreaseAgeAction())
    // setState((prev) => ({ ...prev, age: prev.age - 1 }))
  }

  const increaseX = (value: number) => {
    dispatch(increaseXAction(value))
  }

  return (
    <div className='flex items-center gap-2 justify-center mt-8'>
      <button className='px-4 py-2 border-2 border-red-400 text-red-400 rounded' onClick={increaseAge}>
        Increase
      </button>
      <span className='px-4 py-2 border-2 rounded'>{state.age}</span>
      <button className='px-4 py-2 border-2 border-blue-400 text-blue-400 rounded' onClick={decreaseAge}>
        Decrease
      </button>
      <button className='px-4 py-2 border-2 border-green-400 text-green-400 rounded' onClick={() => increaseX(5)}>
        IncreaseX
      </button>
    </div>
  )
}

export default Counter
