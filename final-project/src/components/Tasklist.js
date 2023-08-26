import React from 'react';
import { useTask } from './TaskContext';
import { ReactComponent as DeleteSVG } from '../assets/logo/delete-button-svgrepo-com.svg'

function TaskList() {
    const { tasks, completeTask, deleteTask } = useTask();

    return (
        <ul className="flex-column text-center max-w-screen-sm mx-auto">
        {tasks.map((task) => (
            <li key={task.id} className='flex flex-auto justify-self-center justify-between'>
            <div className=''>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => completeTask(task.id)}
                className=''
            />
            <span className='pl-1'>{task.text}</span>
            </div>
            <button className='' onClick={() => deleteTask(task.id)}><DeleteSVG/></button>
            </li>
        ))}
        </ul>
    );
}

export default TaskList;
