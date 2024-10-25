import React, { useState, useEffect } from 'react';
import { addTodo, getTodos } from './icApi';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    const fetchTodos = async () => {
        const allTodos = await getTodos();
        setTodos(allTodos);
    };

    const handleAddTodo = async () => {
        await addTodo(newTask);
        setNewTask('');
        fetchTodos();
    };


    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoApp;
