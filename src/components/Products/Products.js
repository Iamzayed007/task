import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cards from '../Cards/Cards';
import Category from '../Category/Category';

const Products = (props) => {
    // const [products, setProducts]= useState({})
   
    // useEffect(()=>{
    //     fetch('./db.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // console.log(data);
    //         setProducts(data)})
    // },[])
    return (
        <div>
            <div className="p-0">
			<label for="table-search" className="sr-only">Search</label>
			<div className="relative mt-1">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg className="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"></path>
					</svg>
				</div>
				<input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search for items"/>
        </div>
			</div>
            <div className="border-2 pb-10">
                <div className="flex justify-between mt-4">
                <button onClick={()=>props.setShowCategorybar(true)}  className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">All Categories</button>
                <button onClick={()=>props.setShowCategorybar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Electronics</button>
                <button onClick={()=>props.setShowCategorybar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Home & Lifestyle</button>
                <button onClick={()=>props.setShowCategorybar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Man Fasion</button>
                <button onClick={()=>props.setShowCategorybar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Women Fasion</button>
                </div>

                <div className="" >
            <Cards />
            {/* {
                products.map((product)=> {<Card product={product}></Card>})
            } */}
        </div>
            </div>
        <Category showCategorybar={props.showCategorybar} setShowCategorybar={props.setShowCategorybar}/>
        </div>
    );
};

export default Products;