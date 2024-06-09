import { createSlice } from "@reduxjs/toolkit"


const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        filterName: "",
    }, 
    reducers: {
        addTodo: (state, { payload }) => {
            state.items.push(payload)
        },
        deleteTodo: (state, { payload }) => {
            const index = state.items.findIndex((todo) => todo.id === payload)
            state.items.splice(index, 1)
        },
        changeFilter: (state, { payload }) => {
            state.filterName = payload
        }
    }
})

export function selectTodos(state) {
    return state.todos.items
}
export default todosSlice.reducer
export const { addTodo, deleteTodo, changeFilter } = todosSlice.actions 
export function selectFilter(state) {
    return state.todos.filterName
}