import {useState} from "react";

export const TaskCreator = (props) => {

  const [ newTaskName, setNewTaskName ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form className="my-2 row" onSubmit={handleSubmit}>
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter a new task..."
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex align-items-center">
        <button className="btn btn-primary" type="submit" disabled={!newTaskName.trim()}>
          Save Task
        </button>
      </div>
    </form>
  )
}