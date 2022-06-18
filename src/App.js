import './App.css';
import { TaskCreator } from "./components/TaskCreator";
import {useEffect, useState} from "react";
import {TaskTable} from "./components/TaskTable";
import {VisibilityControl} from "./components/VisibilityControl";
import {Container} from "./components/Container";

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [haveItems, setHaveItems] = useState(false)

  useEffect(() => {
    let data = localStorage.getItem('tasks')

    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  useEffect( () => {

    const tasksDone = taskItems.filter( t => t.done )

    setHaveItems(tasksDone.length > 0)

    localStorage.setItem('tasks', JSON.stringify(taskItems))

  }, [ taskItems ])

  const createNewTask = (taskName) => {

    const filteredTasks = taskItems.filter( task => task.name === taskName )

    if (filteredTasks.length > 0) {
      return;
    }

    setTaskItems([...taskItems, {name: taskName, done: false}])
  }
  
  const toggleTask = task => {
    setTaskItems( taskItems.map( (t) => (t.name === task.name ? {...t, done: !t.done} : t )) )
  }
  
  const cleanTasks = () => {
    setTaskItems(taskItems.filter( t => !t.done ))
    setShowCompleted(false)
  }

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>

        <TaskCreator createNewTask={createNewTask} />

        <TaskTable taskItems={taskItems} toggleTask={toggleTask} />

        <VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)}
                           cleanTask={cleanTasks}
                           haveItems={haveItems}
                           isChecked={showCompleted} />

        { showCompleted && (
          <TaskTable name="Completed Tasks" taskItems={taskItems} toggleTask={toggleTask} showCompleted={showCompleted} />
        )}

      </Container>
    </main>
  );
}

export default App;
