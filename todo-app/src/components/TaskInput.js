import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (input.trim() !== "") {
            dispatch(addTask(input));
            setInput("");
        }
    };

    return (
        <div className="task-input">
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a task..."
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
