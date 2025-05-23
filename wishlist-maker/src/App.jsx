import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Header from './components/header';
import Welcome from './components/welcome';
import Lists from './components/lists';
import ViewList from './components/ViewList';
import ViewItem from './components/ViewItem';
import NewList from './components/NewList';
import NewItem from './components/NewItem';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/:userID/lists" element={<Lists />} />
          <Route path="/lists/new" element={<NewList />} />
          <Route path="/:userID/lists/:listID" element={<ViewList />} />
          <Route path=":userID/lists/:listID/:itemID" element={<ViewItem />} />
          <Route path="/item/new" element={<NewItem />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
