import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Cocktails from './Pages/Cocktails';
import Home from './Pages/Home';
import Recipe from './Pages/Recipe';
import Banks from './Pages/Banks';
import Meals from './Pages/Meals';
import Potter from './Pages/Potter';

function App() {
  return (
    <>
      <Router>
        {/* Navbar should always be visible */}
        <Navbar />

        {/* Define the routes */}
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/Banks" element={<Banks />} />
          <Route path="/Cocktails" element={<Cocktails />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/Meals" element={<Meals />} />
          <Route path="/Potter" element={<Potter />} />
        </Routes>
      </Router>

      {/* MainPage should not be outside Routes unless it's meant to be globally rendered */}
      {/* If you want MainPage to always be rendered, you can move it inside the Router */}
      {/* <MainPage />  */}
    </>
  );
}

export default App;
