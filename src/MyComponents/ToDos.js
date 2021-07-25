import React from 'react'
import { ToDoItem } from "./ToDoItem";

export const ToDos = (props) => {
    let myStyle={
        minHeight:"60vh",
        margin:"40px auto"

    }

    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">ToDo's List</h3>
            {props.todos.length===0?"No ToDo's to display":
            props.todos.map((todo)=>{
                return (
                    <>
                <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                <hr/>
                </>
    )})
            }
        
        </div>
    )
}
