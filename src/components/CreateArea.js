import { useState } from "react"

const CreateArea = () => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })


  function handleChange(event) {
    const [name, value] = event.target.value;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  return (
    <form>
        <input 
            name="title" 
            onChange={handleChange} 
            value={note.title} placeholder="Title" 
        />
        <textarea 
            name="content" 
            onChange={handleChange} 
            value={note.content} 
            placeholder="Take a note..." 
            rows="3"     
        />

        <button>Add</button>
  </form>
  )
}

export default CreateArea


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render separate Note components for each item.
