const Footer = () => {

  // Create a const named getCurrentYear and return a function to get the active year
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };


  return (
    <footer>
        <p>Copyright &copy; {getCurrentYear()}</p>
    </footer>
  )
}

export default Footer