import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Home from './pages/Home.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import PracticeQuestion from './pages/PracticeQuestion.jsx';
import ChapterWiseTest from './pages/ChapterWiseTest.jsx';
import ConceptVideos from './pages/ConceptVideos.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/PracticeQuestion" element={<PracticeQuestion />} />
          <Route path="/Bookmarks" element={<Bookmarks/>} />
          <Route path="/ChapterWiseTest" element={<ChapterWiseTest />} />
          <Route path="/ConceptVideos" element={<ConceptVideos />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;