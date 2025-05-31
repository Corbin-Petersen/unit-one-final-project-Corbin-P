import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
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
  
  console.log(data);
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setLogin={setLogin} data={data} library={library} />
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setLogin={setLogin} data={data} />} />
          <Route path=":userID">
            <Route path="lists">
              <Route index element={<Lists data={data} />} />
              <Route path=":listID">
                <Route index element={<ViewList data={data} />} />
                <Route path=":itemID" element={<Item data={data} />} />
                <Route path="new" element={<NewItem />} />
              </Route>
              <Route path="new" element={<NewList data={data} />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
