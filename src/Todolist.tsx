import React from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {MapComponent} from "./MapComponent";
import {Button} from "./Button";

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

    const onFilterClickHandler = (filter: FilterValuesType) => props.changeFilter(filter, props.id);


    const AddItemFormHandler = (title: string) => props.addTask(title, props.id);

    const editItemTodolistHandler = (title: string) => props.editItemTodolist(props.id, title);


    return <div>
        <h3>
            <EditableSpan
                title={props.title}
                callback={editItemTodolistHandler}

            />
            <Button name={"x"} callback={removeTodolist}/>
        </h3>
        <AddItemForm
            callback={AddItemFormHandler}
        />
        <MapComponent
            id={props.id}
            tasks={props.tasks}
            removeTask={props.removeTask}
            editItemTask={props.editItemTask}
            changeTaskStatus={props.changeTaskStatus}
        />
        <div>
            <Button filter={props.filter} name={"all"} callback={() => onFilterClickHandler("all")}/>
            <Button filter={props.filter} name={"active"} callback={() => onFilterClickHandler("active")}/>
            <Button filter={props.filter} name={"completed"} callback={() => onFilterClickHandler("completed")}/>
        </div>
    </div>
}


