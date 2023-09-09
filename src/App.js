import './App.css';

function App() {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className='text-lg font-bold m-auto text-center my-16'>Counter : 0</div>
      <div className='m-auto text-center'>
        <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4'>Increase</button>
        <button className=' bg-red-400 text-white rounded-md py-2 px-6 mx-4'>Decrease</button>
      </div>
    </div>
  );
}

export default App;
