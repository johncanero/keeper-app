import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';

const App = () => {
  return (
    <div className="App">
        <Header />
        <CreateArea />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
    </div>
  );
}

export default App;
