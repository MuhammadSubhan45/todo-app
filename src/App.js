import React, { useState } from 'react';

const TodoApp = () => {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    setTodoItem(event.target.value);
  };

  const addTodo = () => {
    if (todoItem.trim() !== '') {
      setTodoList([...todoList, todoItem]);
      setTodoItem('');
    }
  };

  const deleteItem = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const editItem = (index) => {
    const editValue = prompt('Enter Edit Value', todoList[index]);
    if (editValue !== null) {
      const updatedList = [...todoList];
      updatedList[index] = editValue;
      setTodoList(updatedList);
    }
  };

  const deleteAll = () => {
    setTodoList([]);
  };

  return (
    <div className='todoo'>
      <div className="text">
        <input
          type="text"
          name=""
          id="todo-item"
          value={todoItem}
          onChange={handleInputChange}
        />
        <button onClick={addTodo} className='btnss'>ADD ITEM</button>
        <button onClick={deleteAll} className='btnss'>DELETE ALL</button>
      </div>
      <div>
        <ul id="list">
          {todoList.map((item, index) => (
            <li key={index} className='list'>
              {item}
              <button onClick={() => deleteItem(index)} className='btnss dd'>DELETE</button>
              <button onClick={() => editItem(index)} className='btnss dd'>EDIT</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
