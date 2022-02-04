import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Fed 5th at 2:30pm',
        reminder: false
    }
])

  /*//Add button
  const addButton = () => {

  }*/

  //Add task
  const addTask = (task) => {
    const id=Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  //showAddTask && is just fast way to do ternary without else statement
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks set!'}
    </div>
  )
}

/*function App() {
  return (
      <div className="App">
        <Header />
      </div>
    );
  }*/

  //using class example
  /*class App extends React.Component {
    render() {
      return <h1>Hello from a class</h1>
    }
  }*/

//example
/*function App() {
const name = ''

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <h2>Hi {name.length>0 ? name : 'NoName'}</h2>
    </div>
  );
}*/

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/
export default App;