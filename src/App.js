import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';
import Navbar from './Components/Navbar/Navbar'
import DisplayEntries from './DisplayEntries/DisplayEntries';


function App() {
  const [entries, setEntries] = useState([{Name: 'Dudu',Post: 'where the party at'}])
  return (
    <div>
      <Navbar />
      <AddEntryForm />
      <DisplayEntries parentEntries={entries}/>
    </div>
  );
}
export default App;