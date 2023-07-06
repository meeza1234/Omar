import { useState, useEffect } from 'react';

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Fetch todos from an API or local storage
    const fetchedTodos = fetchTodos();
    setTodos(fetchedTodos);
  }, []);

  const fetchTodos = () => {
    // Simulating fetching todos from an API or local storage
    return [
      { id: 1, text: 'Finish homework', completed: false },
      { id: 2, text: 'Buy groceries', completed: true },
      { id: 3, text: 'Walk the dog', completed: false },
    ];
  };

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (newTodo.trim() === '') {
      return;
    }

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
