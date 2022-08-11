const CreateArea = () => {
  return (
    <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
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
//- Take array and render seperate Note components for each item.
