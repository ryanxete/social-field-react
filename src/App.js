import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';

function App() {
  const [entries, setEntries] = useState([{Name: 'Dudu',Post: 'where the party at'}])
  return (
    <div>
      <AddEntryForm parentEntries={entries}/>
    </div>
  );
}

export default App;