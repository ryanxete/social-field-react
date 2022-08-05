import React, { useState } from 'react';
import AddEntryForm from './Components/AddEntryForm/AddEntryForm';
import Navbar from './Components/Navbar/Navbar'
import DisplayEntries from './DisplayEntries/DisplayEntries';
import './App.css'


function App() {
  const [entries, setEntries] = useState([{Name: 'Dudu',Post: 'where the party at'},{Name: 'Khodam', Post: 'are'}])

  function AddNewEntry (entry) {
    let tempEntry = [entry, ...entries]
    setEntries(tempEntry)
  }

  return (
    <div className='container-fluid'>
      <div className='navbar'>
      <Navbar />
      </div>
      <div className='feed'>
      <AddEntryForm addNew={AddNewEntry}/>
      <DisplayEntries parentEntries={entries}/>
      </div>
    </div>
  );
}
export default App;