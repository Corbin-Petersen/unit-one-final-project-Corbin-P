import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Header from './components/header';
import Welcome from './components/welcome';
import Lists from './components/lists';
import ViewList from './components/ViewList';
import ViewItem from './components/ViewItem';

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/lists/viewlist" element={<ViewList />} />
          <Route path="/lists/viewitem" element={<ViewItem />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
