import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
// import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='w-full flex justify-center py-12'>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        className='px-3 py-2 rounded-sm bg-green-500'

        >
          Increment
        </button>
        <span>{count}</span>
        <button
        className='px-3 py-2 rounded-sm bg-red-500'
          aria-label="Decrement value"

          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}