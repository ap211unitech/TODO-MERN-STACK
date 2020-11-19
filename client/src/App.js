import Navbar from "./components/Navbar";
import Addnote from "./components/addNote";
import Shownotes from "./components/showNotes";
import './App.css';

import { GlobalProvider } from "./context/store"


function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <Addnote />
        <Shownotes />
      </div>
    </GlobalProvider>
  );
}

export default App;
