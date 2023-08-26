import React from 'react';
import { useTask } from './TaskContext.js';

const Additems = () => {
    const { inputText, setInputText, addTask } = useTask();

    const handleInputChange = (e) => {
        setInputText(e.target.value);
      };
    
    const handleAddTask = () => {
        addTask(inputText);
        setInputText('');
    };

    return (
        <>
            <div className="flex justify-self-center justify-center pt-4 max-w-screen-sm mx-auto">
                <input
                    type="text"
                    placeholder="add details"
                    value={inputText}
                    onChange={handleInputChange}
                    className='shadow appearance-none border rounded flex-auto'
                />
                <button onClick={handleAddTask} className='font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700'>Add</button>
            </div>
        </>
    );
};

export default Additems;