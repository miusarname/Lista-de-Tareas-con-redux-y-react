import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import {addTask} from '../features/tasks/taskSlice';
import {v4 as uuid} from 'uuid'
import {useNavigate} from 'react-router-dom'

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    desc: "",
  });

  const dispatch =useDispatch()
  const navigate= useNavigate()

  const handleChandge = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,id:uuid()
    }))
    navigate('/')
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChandge}
      ></input>
      <textarea
        name="Description"
        placeholder="desc "
        onChange={handleChandge}
      ></textarea>
      <button>save</button>
    </form>
  );
}

export default TaskForm;
