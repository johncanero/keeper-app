import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

const App = () => {

  //3. - Add new note to an array.
  const [notes, setNotes] =useState([]);



  // 2. Pass the new note back to the App.
  // 4. Take array and render separate Note components for each item.

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  return (
    <div className="App">
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        
        {notes.map((noteItem) => {
          return <Note 
            title={noteItem.title}
            content={noteItem.content}
          />
        })}
        
        <Footer />
    </div>
  );
}

export default App;
