import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
    //automatically subscribes to redux store
    const todoIds = useSelector(selectTodoIds, shallowEqual)

    const renderedListItems = todoId.map((todoId) => {
        return <TodoListItem key={todoId} id={todoId} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
