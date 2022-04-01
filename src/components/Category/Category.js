import React from 'react';

const Category = (props) => {
    return (
        <div>
              {/* <button onClick={()=>props.setShowSidebar(true)}>click</button> */}
            
              {props.showCategorybar ? (
        <>
          <div
            className="top-0 right-0 min-h-full   flex overflow-x-auto overflow-y-auto fixed  z-50 outline-none focus:outline-none"
          >
  <div className="relative top-0 right-0 z-50">
            <button
                    className="text-gray-100 text-4xl background-transparent mx-4 font-bold uppercase  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowCategorybar(false)}
                  >
                    x
                  </button>
                 
                </div>
            
            <div className="relative top-0 left-0   mx-auto ">
              {/*content*/}
              
              <div className="border-0  shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                
                <div className="p-5  bg-gray-300  border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl  font-semibold">
                    Categories
                  </h3>

                 
                
                 
                </div>
               
               
                {/*body*/}
               
              <div className="relative  p-2 flex flex-col ml-10 justify-start items-start text-gray-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <button onClick={()=>props.setShowCategorybar(true)}  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">All Categories</button>
                <button  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-small hover:bg-gray-600 transition duration-300">Electronics</button>
                <button  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-small hover:bg-gray-600 transition duration-300">Home & Lifestyle</button>
                <button  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-small hover:bg-gray-600 transition duration-300">Man Fasion</button>
                <button  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-small hover:bg-gray-600 transition duration-300">Women Fasion</button>
                </div>
              </div>
             
              </div>
            </div>


          
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}     
        </div>
    );
};

export default Category;