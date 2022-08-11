const Note = (props) => {
  return (
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>DELETE</button>
  </div>
  )
}

export default Note

//CHALLENGE:
//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.