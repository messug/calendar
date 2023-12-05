import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

 return (
    <div className="App">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
      };    

export default App;
