import React from "react";
import Checkbox from "./Checkbox";
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "./Todolist";

type MapComponentPropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    editItemTodolist: (id: string, title: string) => void
    editItemTask: (todolistID: string, taskID: string, title: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
}

export const MapComponent = (props: MapComponentPropsType) => {
    const editItemTaskHandler = (taskID: string, title: string) => props.editItemTask(props.id, taskID, title);
    const changeTaskStatusHandler = (tID: string, newIsDoneValue: boolean) => props.changeTaskStatus(tID, newIsDoneValue, props.id);

    return (
        <div>
            <ul>
                {
                    props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id, props.id)
                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
                                changeTaskStatus={(checked: boolean) => changeTaskStatusHandler(t.id, checked)}
                                checked={t.isDone}/>
                            <EditableSpan
                                title={t.title}
                                callback={(title: string) => editItemTaskHandler(t.id, title)}/>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};