import Navbar from "./components/Navbar";
import Addnote from "./components/addNote";
import Shownotes from "./components/showNotes";
import './App.css';
import { Provider } from "react-redux";
import store from "./flux/store";
import { useEffect } from "react";
import { LoadUser } from "./flux/actions/authAction";
import Footer from "./components/Footer";


function App() {

  useEffect(() => {
    store.dispatch(LoadUser());
  }, [])

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Addnote />
        <Shownotes />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
