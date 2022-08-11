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


  //5. Implement the delete note functionality.
  //- Callback from the Note component to trigger a delete function.
  //- Use the filter function to filter out the item that needs deletion.
  const deleteNote = (id) => {
      // console.log("Delete was triggered")

      setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
        });
      });
  }


  return (
    <div className="App">
        <Header />
        <CreateArea 
            onAdd={addNote}
        />
        
        {/* // 6.- Pass a id over to the Note component, pass it back to the App when deleting. */}
        {notes.map((noteItem, index) => {
          return ( 
            <Note 
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
          />
          )
        })}
        
        <Footer />
    </div>
  );
}

export default App;
