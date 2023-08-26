import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import All from './pages/All';
import Active from './pages/Active';
import Completed from './pages/Completed';
import { TaskProvider } from './components/TaskContext';

function App() {
  return (
    <>
    <TaskProvider>

      <div className='flex-col justify-self-center items-center h-auto'>
      <div className='items-center justify-start '>
        <h1 className='text-center font-bold text-3xl'>#todo</h1>
      </div>
      <Navbar />
      <Routes>
        <Route path='/' element={<All />} />
        <Route path='/active' element={<Active />} />
        <Route path='/completed' element={<Completed />} />
      </Routes>
      </div>
    </TaskProvider>
    </>
  );
}

export default App;
