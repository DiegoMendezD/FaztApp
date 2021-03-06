
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';

import tasks from './sample/task.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Post'



class App extends Component{

  state ={
    tasks: tasks
  }

  addTask = (title, description)=>{
    const newTask ={
      title: title,
      description:description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  }

  deleteTask =(id)=>{
    const newTasks=this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})

  }

  checkDone = id =>{
      const newTask=this.state.tasks.map(task=>{
        if(task.id===id){
          task.done= !task.done
        }
        return task;
      });
      this.setState({tasks:newTask})
  }

//! Exact don't work in Route path
  render(){
    return <div>
      <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
        <Routes>
          {/* <Route exact path="/" render={()=>{
            return <div>
                <TaskForm addTask={this.addTask} />
                <Tasks 
                  tasks={this.state.tasks} 
                  deleteTask={this.deleteTask} 
                  checkDone={this.checkDone}
                />
            </div>
          }}>
          </Route> */}
           
            <Route  path="/" element={
              <>
                <TaskForm addTask={this.addTask} /> 
                <Tasks 
                        tasks={this.state.tasks} 
                        deleteTask={this.deleteTask} 
                        checkDone={this.checkDone}
                      />
              </>
            }/>
          
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
      
      {/* <Posts /> */}
      
    </div>
  }
}




export default App;
