import React, { useState, type JSX } from "react";
import TodoItem from "./todoItem";
import TodoFilter, { type FilterType } from "./todoFilter";
import TodoForm from "./todoForm";

export type Todo = { id: number; text: string; completed: boolean };

export default function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = (text: string) => {
    const t = text.trim();
    if (!t) return;
    const newTodo: Todo = { id: Date.now(), text: t, completed: false };
    setTodos(prev => [...prev, newTodo]); // functional update
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(x => (x.id === id ? { ...x, completed: !x.completed } : x)));
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(x => x.id !== id));
  };

  const filtered = todos.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div>
      <div className="flex justify-center flex-col items-center mb-10 font-bold">
        <h1 className="text-xl">TodoList</h1>
      <p className="text-gray-400">tulislah apa yang ingin kamu lakukan (˶˃ ᵕ ˂˶)</p>
      </div>
      <TodoForm onAdd={addTodo} />

      <div className="flex justify-between items-center">
        <TodoFilter current={filter} onChange={setFilter} />
        <div>{todos.filter(t => !t.completed).length} tersisa</div>
      </div>

      <ul>
        {filtered.length === 0 ? (
          <li className="flex justify-center text-gray-400">Tidak ada tugas.</li>
        ) : (
          filtered.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={() => toggleTodo(todo.id)} onDelete={() => deleteTodo(todo.id)} />
          ))
        )}
      </ul>
    </div>
  );
}
