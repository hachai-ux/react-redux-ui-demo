import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodos = state => state.todos.map(todo => todo.id)

const TodoList = () => {
    //automatically subscribes to redux store
    const todos = useSelector(selectTodos)

    const renderedListItems = todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
