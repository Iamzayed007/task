import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Category from './components/Category/Category';
import Locations from './components/Locations/Locations';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar';
import AuthProvider from '../src/context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCategorybar, setShowCategorybar]= useState(false)
  return (
    <div className="App font-nunito">
      
      <AuthProvider>
      <BrowserRouter>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <Routes>
        <Route path="/" element={<Locations showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
                                            showCategorybar={showCategorybar} setShowCategorybar={setShowCategorybar}
        />} />
        {/* <Route path="/" element={<PrivateRoute><Locations showSidebar={showSidebar} setShowSidebar={setShowSidebar} 
                                            showCategorybar={showCategorybar} setShowCategorybar={setShowCategorybar}
        /></PrivateRoute>} /> */}
        

        <Route path="/login" element={
          <Login/>
        } />
       
        <Route path="/register" element={
          <Register/>
        } />
       
      </Routes>
      {/* <Category showCategorybar={showCategorybar} setShowCategorybar={setShowCategorybar}/> */}
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
