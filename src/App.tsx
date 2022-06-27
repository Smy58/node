import React from 'react';
import './App.css';

import Cards from './Cards';

function App() {
  return (
    <>
      <main className='main'>
        <div className='toDo'>
          <h2 className='toDo__title'> To Do List</h2>
          <Cards/>
          
        </div>
      </main>
    </>
  );
}

export default App;
