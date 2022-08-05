import notes from '../notes'


const Note = () => {

  // Props Function
  const Card = (props) => {
      return (
          <div className='note'>
              <h1>{props.title}</h1>
              <p>{props.content}</p>
          </div>
      );
  }

  // Map Function



  return (
    <div className="note">
        <h1>This is the note title</h1>
        <p>This is the note content</p>
    </div>

    // notes.map

  )
}

export default Note