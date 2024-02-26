const initialState = {
    checkList: []
}
export const todoReducer = (state = initialState, action) => {

    const { type, payload } = action

    if (type === 'ADD_TODO') {
        let newList = [...state.checkList, payload]
        return { ...state, checkList: newList }
    }
    else if (type === 'DELETE_TODO') {
        let newCheckList = state.checkList.filter((task, index) => {
            return task.id != payload
        })
        return { ...state, checkList: newCheckList }
    }
    else {
        return state;
    }
}
