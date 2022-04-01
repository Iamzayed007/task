import React, { useState } from 'react';


import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    // const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div>
            {/* <button onClick={()=>props.setShowSidebar(true)}>click</button> */}
            
            {props.showSidebar ? (
        <>
          <div
            className="top-0 left-0 min-h-full   flex overflow-x-auto overflow-y-auto fixed  z-50 outline-none focus:outline-none"
          >

            
            <div className="relative top-0 left-0 w-96  mx-auto max-w-3xl">
              {/*content*/}
              
              <div className="border-0  shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                <div className="p-5  bg-gray-300  border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl  font-semibold">
                    go<span className='text-green-400'>B</span>illing
                  </h3>

                  <div className="mt-8 flex flex-col items-start">
                   <p>Location:</p>
                   <h4 className='text-lg'>Los Angeles , Californiya</h4>
                   
                 </div>
                
                 
                </div>
               
               
                {/*body*/}
               
              <div className="relative  p-2 flex flex-col ml-10 justify-start items-start text-gray-500">
              <div className=" p-2  ">
                  <Link to="/" className="text-lg">Dashboard</Link>
              
                 
                </div>
                <div className="p-2 ">
                  <Link to="/" className="text-lg">Location</Link>
                 
                </div>
                <div className="p-2 ">
                  <Link to="/" className="text-lg">POS Invoices</Link>
                 
                </div>
                <div className="p-2 ">
                  <Link to="/" className="text-lg">Settings</Link>
                 
                </div>
              </div>
                {/*footer*/}
                <div className="flex mt-64 items-center justify-center p-3 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                   
                  >
                    Sign out
                  </button>
                
                </div>
              </div>
            </div>


            <div className="relative top-0 right-0 z-50">
            <button
                    className="text-gray-100 text-4xl background-transparent mx-4 font-bold uppercase  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowSidebar(false)}
                  >
                    x
                  </button>
                 
                </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}     
                   


</div>
         
            
    );   
};

export default Sidebar;