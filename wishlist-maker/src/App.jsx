import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Header from './components/Header';
import Welcome from './components/Welcome';
import Lists from './components/Lists';
import ViewList from './components/ViewList';
import ViewItem from './components/ViewItem';
import NewList from './components/NewList';
import NewItem from './components/NewItem';
import Footer from './components/Footer';
import { useState } from 'react';
import data from './data/userData.json';

function App() {
  const [ isLoggedIn, setLogin ] = useState(false);
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLogin={setLogin} userData={data}/>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome isLoggedIn={isLoggedIn} setLogin={setLogin} data={data}/>} />
          <Route path="/:userID/lists" element={<Lists data={data} />} />
          <Route path="/lists/new" element={<NewList data={data} />} />
          <Route path="/:userID/lists/:listID" element={<ViewList data={data} />} />
          <Route path=":userID/lists/:listID/:itemID" element={<ViewItem data={data} />} />
          <Route path="/item/new" element={<NewItem data={data} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
