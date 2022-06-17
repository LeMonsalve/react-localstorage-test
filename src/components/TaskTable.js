import {TaskRow} from "./TaskRow";

export const TaskTable = ({taskItems, toggleTask, showCompleted = false, name = "Tasks"}) => {

  const taskTableRows = (doneValue) => {

    return (
      taskItems
        .filter((task) => task.done === doneValue )
        .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
    )
  }

  return (
    <div>
      <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
        <tr className="table-primary">
          <th>{name}</th>
        </tr>
        </thead>
        <tbody>
        {
          taskTableRows(showCompleted)
        }
        </tbody>
      </table>
    </div>
  )
}