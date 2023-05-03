import React, {useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    removeAllTask: () => void
}

export function Todolist(props: PropsType) {


    let [filter, setFilter] = useState<FilterValuesType>("all");

    const tasksForTodolistBox = () => {
        let tasksForTodolist = props.tasks;

        if (filter === "active") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === false);
        }
        if (filter === "completed") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === true);
        }
        if (filter === "3") {
            tasksForTodolist = props.tasks.filter(t => t.id === 1 || t.id === 2 || t.id === 3);
        }
        return tasksForTodolist;
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolistBox().map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <button onClick={() => {
            props.removeAllTask()
        }}>DELETE ALL TASKS
        </button>
        <div>
            <button onClick={() => {
                changeFilter("all")
            }}>
                All
            </button>
            <button onClick={() => {
                changeFilter("active")
            }}>
                Active
            </button>
            <button onClick={() => {
                changeFilter("completed")
            }}>
                Completed
            </button>
            <button onClick={() => {
                changeFilter("3")
            }}>
                First three tasks
            </button>
        </div>
    </div>
}
