import React from "react";
import Welcome from "./components/Welcome";
import "./TodoApp.css";
import Login from "./components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Error from "./components/Error";
import ListTodos from "./components/ListTodos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logout from "./components/Logout";
import AuthProvider, { useAuth } from "./security/AuthContext";
import UpdateTodo from "./components/UpdateTodo";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();
  if (authContext.isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}

function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <Logout />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodos />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/update/:id"
              element={
                <AuthenticatedRoute>
                  <UpdateTodo />
                </AuthenticatedRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default TodoApp;
