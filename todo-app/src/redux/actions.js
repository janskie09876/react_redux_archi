export const addTask = (text) => ({ type: 'ADD_TASK', payload: { id: Date.now(), text, completed: false } });
export const deleteTask = (id) => ({ type: 'DELETE_TASK', payload: id });
export const toggleTask = (id) => ({ type: 'TOGGLE_TASK', payload: id });
export const editTask = (id, text) => ({ type: 'EDIT_TASK', payload: { id, text } });