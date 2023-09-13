import { useDispatch, useSelector } from 'react-redux';
import { increase,decrease } from './store/counterSlice';
import './App.css';

function App() {

  const globalState = useSelector((state)=> state)
  const dispatch = useDispatch()

  return (
    <div className="max-w-[1280px] m-auto">
      <div className='text-6xl font-bold m-auto text-center my-16'>Redux Basic </div>
      {
        <>
            <div className='text-lg font-bold m-auto text-center my-16'>Counter : {globalState.value}</div>
            <div className='m-auto text-center'>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={()=> dispatch(increase(1))}>Increase</button>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={()=> dispatch(increase(5))}>Increase Five</button>
              <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4' onClick={()=> dispatch(decrease(1))}>Decrease</button>
            </div>
        </>
      }
      
      <div className='w-full m-auto text-center my-20'>
        <button className=' bg-red-400 text-white m-auto text-center rounded-md py-2 px-6 mx-4'>Show And Hide Counter</button>
      </div>
    </div>
  );
}

export default App;
