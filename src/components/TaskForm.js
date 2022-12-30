import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    desc: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChandge = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    
    navigate("/");
  };

  return (
    <form onSubmit={handleSumit}>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChandge}
        value={task.title}
      ></input>
      <textarea
        name="Description"
        placeholder="desc "
        onChange={handleChandge}
        value={task.description}
      ></textarea>
      <button>save</button>
    </form>
  );
}

export default TaskForm;
