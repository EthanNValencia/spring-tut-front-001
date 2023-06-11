import React, { useEffect, useState } from "react";
import { useAuth } from "../security/AuthContext";
import { deleteTodoById, getAllTodosByUsername } from "../api/ApiService";
import { useNavigate } from "react-router-dom";

function ListTodos() {
  const authContext = useAuth();
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 2,
    today.getMonth(),
    today.getDay()
  );

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    getAllTodosByUsername(authContext.username)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    deleteTodoById(authContext.username, id)
      .then(() => {
        setMessage(
          `Item with id ${id} was deleted for user ${authContext.username}.`
        );
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  function updateTodo(id) {
    console.log(id);
    navigate(`/update/${id}`);
  }

  function addNewTodo() {
    navigate(`/update/-1`);
  }

  function TodoItems() {
    return todos.map((todo) => (
      <tr key={todo.id}>
        <td>{todo.description}</td>
        <td>{todo.done.toString()}</td>
        <td>{todo.targetDate.toString()}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => updateTodo(todo.id)}
          >
            Update
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <div className="container">
      {message && <div className="alert alert-warning">{message}</div>}
      <table className="table">
        <thead className="thead">
          <tr>
            <td>Description</td>
            <td>Completed</td>
            <td>Target Date</td>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <TodoItems />
        </tbody>
      </table>
      <div className="btn btn-success m-5" onClick={addNewTodo}>
        Add New Todo
      </div>
    </div>
  );
}

export default ListTodos;
