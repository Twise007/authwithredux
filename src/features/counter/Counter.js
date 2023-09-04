import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'
import { useState } from 'react'


const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setincrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0
    const resetAll = () => {
        setincrementAmount(0);
        dispatch(reset());
    }
    return (

<section>
    <p>{count}</p>
<div>
    <button className='m-2 btn' onClick={() => dispatch(increment())}>+</button>
    <button className='m-2 btn' onClick={() => dispatch(decrement())}>-</button>

</div>
<input
className='bg-white input'
type='text'
value={incrementAmount}
onChange={(e) => setincrementAmount(e.target.value)}
/>
<div className=''>
    <button className='m-2 btn' onClick={() => dispatch(incrementByAmount(addValue))}>
        Add amount
    </button>
      <button className='m-2 btn' onClick={resetAll}>
        reset
    </button>
</div>
</section>
  )
}

export default Counter