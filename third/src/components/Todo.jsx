import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../Features/todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="mb-5">
        <input
          className="border border-black p-3 rounded-md mr-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add New Text"
        />
        <button
          className="bg-green-500 p-3 rounded-md text-white"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mb-2">
            {todo.text}
            <button
              className="ml-2 bg-red-500 p-1 rounded-md text-white"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
