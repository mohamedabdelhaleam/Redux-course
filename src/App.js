import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>{
    if (state.value < 0) {
      return  "No Number"
    };
    return state.value
  })
  const toggleState = useSelector((state)=>{
    return state.show
  })

  const increase =()=>{
    const action = {type:"increase"}
    dispatch(action)
  }
  const increaseByFive =()=>{
    const action = {type:"increaseByFive" , payload: 5}
    dispatch(action)
  }
  const decrease =()=>{
    const action = {type:"decrease"}
    dispatch(action)
  }
  const toggleCounter = (e)=>{
    const action = {type : "toggle"}
    dispatch(action)
  }
  return (
    <div className="max-w-[1280px] m-auto">
      {
        toggleState && <>
            <div className='text-lg font-bold m-auto text-center my-16'>Counter : {state}</div>
            <div className='m-auto text-center'>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={increase}>Increase</button>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={increaseByFive}>Increase Five</button>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={decrease}>Decrease</button>
            </div>
        </>
      }
      
      <div className='w-full m-auto text-center my-20'>
        <button className=' bg-red-400 text-white m-auto text-center rounded-md py-2 px-6 mx-4' onClick={toggleCounter}>Show And Hide Counter</button>
      </div>
    </div>
  );
}

export default App;
