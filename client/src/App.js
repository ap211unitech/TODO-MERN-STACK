import Navbar from "./components/Navbar";
import Addnote from "./components/addNote";
import Shownotes from "./components/showNotes";
import './App.css';

import { Provider } from "react-redux";
import Store from "./flux/store"

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Navbar />
        <Addnote />
        <Shownotes />
      </div>
    </Provider>
  );
}

export default App;
