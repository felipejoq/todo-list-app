import React from 'react'
import { Tasks } from './components/task/Tasks'

export const ToDoListApp = () => {
    return (
        <div className="wrapper">
            <div className="contaier">
                <header>
                    <h1>TO-DO List App</h1>
                </header>

                <p className="instructions">
                    Hello! To create a task you must write in the following form and then press enter or the add button.
                </p>

                <main>
                    <Tasks />
                </main>
            </div>
            <footer>
            <p>Felipe JQ - <a target="_blank" href="https://github.com/felipejoq/todo-list-app">Repository</a></p>
            </footer>
        </div>
    )
}
