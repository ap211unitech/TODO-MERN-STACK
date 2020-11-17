import Navbar from "./components/Navbar";
import Addnote from "./components/addNote";
import Shownotes from "./components/showNotes";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Addnote />
      <Shownotes />
    </div>
  );
}

export default App;
