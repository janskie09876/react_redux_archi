import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import '../css/styles.css';

const TaskInput = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };

    return (
        <div className="input-container">
            <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Add a new task" />
            <button className="add-button" onClick={handleAddTask}>Add</button>
        </div>
    );
};
export default TaskInput;