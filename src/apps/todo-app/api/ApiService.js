import { apiClient } from "./apiClient";

export const getHelloWorld = () => apiClient.get("/hello-world");

export const getHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const getHelloWorldPathVariable = (username, token) =>
  apiClient.get(`/hello-world/path-variable/${username}`, {});

export const executeBasicAuthenticationService = (token) =>
  apiClient.get("/basicauth", {
    headers: {
      Authorization: token,
    },
  });

// http://localhost:8080/users/ethan/todos

export const getAllTodosByUsername = (username) =>
  apiClient.get(`/users/${username}/todos`);

export const deleteTodoById = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (username, todo) =>
  apiClient.post(`/users/${username}/todos/`, todo);
