export const ADD_TODO = 'ADD_TODO'
export const addTodo = (data) => ({
    
    type: ADD_TODO,
    payload: data
})

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});