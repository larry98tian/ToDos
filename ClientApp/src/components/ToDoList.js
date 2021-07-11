import React, { Component } from 'react';
import ToDo from './ToDo';

export default function ToDoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => { return <ToDo todo={todo} toggleTodo={toggleTodo} key={todo.name} /> })
    )
}