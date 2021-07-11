import React, { Component,useState, useRef, useEffect } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import ToDoList from './components/ToDoList'
import './custom.css'

export default function App() {
    const todoNameRef = useRef();
    const [todos, setTodos] = useState([{ name: 'read asp.net', complete: false }]);

    function handleToDoAdd(e) {
        const name = todoNameRef.current.value;
        if (name === '') return
        console.log(name);
        setTodos(prevTodos => { return [...prevTodos, { name: name, complete: false }] })
        todoNameRef.current.value = '';
    }
    function toggleTodo(name) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.name === name);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }
    /*useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) setTodos(storedTodos);
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    */
      return (
          <>
              <ToDoList todos={todos} toggleTodo={toggleTodo} />
              <input ref={todoNameRef} />
              <button onClick={handleToDoAdd} > Add ToDo</button>
              <button>Clear completed ToDos</button>
              <div>
                  0 lefted to dos 
              </div>
          </>


    );
  }

