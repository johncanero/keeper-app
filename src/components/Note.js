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
  const notesCard = (notes) => {
      return ( <Card 
          key={notes.id}
          title={notes.title}
          content={notes.content}
      />
      );
  }


  return (
    <div>
        {notes.map(notesCard)}
    </div>
  )
}

export default Note