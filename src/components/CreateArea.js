import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";

const CreateArea = (props) => {

  // 1. Create a constant that keeps track of the title and content.
  const [note, setNote] = useState({
    title: "",
    content: ""
  })


  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // 2. Pass the new note back to the App.
  // - Prevent Re-Loading of the Page
  // - Add new note to an array.

  // 7. Clear Out the title and content after Adding
  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }


  return (
    <div>
        <form className="create-note">
            <input 
                name="title" 
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title" 
            />
            <textarea 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Take a note..." 
                rows="3"     
            />

            {/* <button onClick={submitNote}>
                <AddIcon />
            </button> */}
            <Fab onClick={submitNote}>
                 <AddIcon />
            </Fab>  
        </form>
    </div>
  )
}

export default CreateArea;


