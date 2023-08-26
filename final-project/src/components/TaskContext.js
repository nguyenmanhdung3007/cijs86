import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text) => {
        if (text.trim() !== '') {
        setTasks([...tasks, { id: Date.now(), text, completed: false }]);
        }
    };

    const completeTask = (taskId) => {
        const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    const clearCompleted = () => {
        const uncompletedTasks = tasks.filter((task) => !task.completed);
        setTasks(uncompletedTasks);
    };

    
    return (
        <TaskContext.Provider
        value={{
            tasks,
            inputText,
            addTask,
            completeTask,
            deleteTask,
            clearCompleted,
            setInputText,
        }}
        >
        {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
  return useContext(TaskContext);
}
