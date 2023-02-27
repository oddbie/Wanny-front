import { React, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

function Todo() {
  const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);

  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');

  const loadTodoList = async () => {
    await axios
      .get('/api/todolist')
      .then((res) => {
        setTodos(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.log('error');
      });
  };

  const addTodo = async () => {
    await axios
      .post('/api/todo', {
        item: item,
        category: category ? category : null,
      })
      .then((response) => {
        console.log(response);
        setItem('');
        setCategory('');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='Todo'>
      <h1>This is Todo</h1>
      <div>
        <TextField
          id='item'
          label='item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <TextField
          id='category'
          label='category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={addTodo}>Add Todo List</Button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>item</th>
              <th>category</th>
              <th>due_date</th>
              <th>finish_date</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((row, idx) => {
              return (
                <tr key={row['id']}>
                  <td>{row['id']}</td>
                  <td>{row['item']}</td>
                  <td>{row['category']}</td>
                  <td>{row['dueDate']}</td>
                  <td>{row['finishDate']}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Button onClick={loadTodoList}>Load Todo List</Button>
      </div>
    </div>
  );
}

export default Todo;
