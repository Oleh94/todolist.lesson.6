import React from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import Checkbox from "./Checkbox";
import {MapComponent} from "./MapComponent";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editItemTodolist: (id: string, title: string) => void
    editItemTask: (todolistID: string, taskID: string, title: string) => void
}

export function Todolist(props: PropsType) {
    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const AddItemFormHandler = (title: string) => props.addTask(title, props.id);

    const editItemTodolistHandler = (title: string) => props.editItemTodolist(props.id, title);


    return <div>
        <h3>
            <EditableSpan
                title={props.title}
                callback={editItemTodolistHandler}

            />
            <button onClick={removeTodolist}>x</button>
        </h3>
        <AddItemForm
            callback={AddItemFormHandler}
        />
        <MapComponent
            id={props.id}
            title={props.title}
            tasks={props.tasks}
            removeTask={props.removeTask}
            editItemTodolist={props.editItemTodolist}
            editItemTask={props.editItemTask}
            changeTaskStatus={props.changeTaskStatus}

        />
        <div>
            <button className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


