import { React, useState, useEffect } from 'react';
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      setLoading(true);
      const response = await axios.get('/api/todolist');
      setTodos(response.data);
      setLoading(false);
    };
    getTodos();
  }, []);

  useEffect(() => {
    console.log('in effect', todos);
  }, [todos]);

  return (
    <div className='Todo'>
      <h1>This is Todo</h1>
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
    </div>
  );
}

export default Todo;
