import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import '../css/styles.css';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    return (
        <ul className="task-list">
            {tasks.map(task => <TaskItem key={task.id} task={task} />)}
        </ul>
    );
};
export default TaskList;