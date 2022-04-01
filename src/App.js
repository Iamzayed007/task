import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Category from './components/Category/Category';
import Locations from './components/Locations/Locations';
import Sidebar from './components/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCategorybar, setShowCategorybar]= useState(false)
  return (
    <div className="App font-nunito">
      
   

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Routes>
        <Route path="/" element={<Locations showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
                                            showCategorybar={showCategorybar} setShowCategorybar={setShowCategorybar}
        />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      {/* <Category showCategorybar={showCategorybar} setShowCategorybar={setShowCategorybar}/> */}
    </div>
  );
}

export default App;
