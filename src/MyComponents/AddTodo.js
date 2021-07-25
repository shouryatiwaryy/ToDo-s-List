
import React,{useState} from 'react';

export const AddTodo = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {alert("Title and Description cannot be left blank");
    }
    props.addTodo(title,desc)
    setTitle("");
    setDesc("");

    }
    return (
        <div className="container my-3">
            <h3>Add a ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">ToDo title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"  />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">ToDo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>

               

                <button type="submit" onClick={submit} className="btn btn-sm btn-success">Add ToDo</button>
            </form>
        </div>
    )
}
