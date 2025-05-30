import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Lists from './components/Lists';
import ViewList from './components/ViewList';
import NewList from './components/NewList';
import NewItem from './components/NewItem';
import Footer from './components/Footer';
import Item from './components/Item';
import presetData from './data/userData.json';
// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  const [ isLoggedIn, setLogin ] = useState(false);
  
  // send dummy data to local storage
  // localStorage.setItem('fakeData', JSON.stringify(presetData));
  const data = JSON.parse(localStorage.getItem('fakeData'));
  !data && localStorage.setItem('fakeData', JSON.stringify(presetData));
  
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLogin={setLogin} data={data} library={library} />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome isLoggedIn={isLoggedIn} setLogin={setLogin} data={data} />} />
          <Route path="/:userID/lists" element={<Lists data={data} />} />
          <Route path="/lists/new" element={<NewList data={data} />} />
          <Route path="/:userID/lists/:listID" element={<ViewList data={data} />} />
          <Route path=":userID/lists/:listID/:itemID" element={<Item data={data} />} />
          <Route path="/item/new" element={<NewItem />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
