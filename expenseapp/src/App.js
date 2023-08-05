import './App.css';
import Add from './components/Add.js';
import YearSelected from './components/YearSelected.js';

function App() {
  return (
    <>
    <div className='body'>
    <Add />
    <div className='expense_container'>
      <div className='head_container'>
        <div>
        <p>Filter by year</p>
        </div>
        <YearSelected />
      </div>
    </div>

    </div>
    </>
  );
}

export default App;
