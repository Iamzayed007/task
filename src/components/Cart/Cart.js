import React from 'react';
import { useState } from 'react';
import AddUser from '../AddUser/AddUser';
import { Account, Cancel, Discount, Edit, HandGrab, HoldOrder, Menu, Pay, Plus, PlusCircle, StickyNote, Trash, Truck } from '../Icons/Icons';

const Cart = (props) => {
    const [showUserModal,setShowUserModal] =useState(false)
    console.log(showUserModal);
    return (
        <div className=''>
            <div className="flex md:justify-between mx-4">
                <button onClick={() => props.setShowSidebar(true)} className=" text-gray-700 px-2 mx-4 py-2  text-1xl font-medium hover:bg-gray-600 transition duration-300"><Menu/></button>
                <button onClick={() => props.setShowSidebar(true)} className="bg-blue-100 font-bold text-blue-700 mx-2 px-2  md:px-4 py-2 rounded-md text-1xl  hover:bg-blue-300 transition duration-300"><StickyNote/> Note</button>
                <button onClick={() => props.setShowSidebar(true)} className="bg-blue-100 font-bold text-blue-700 mx-2 px-2  md:px-4 py-2 rounded-md text-1xl  hover:bg-blue-300 transition duration-300"><Truck/> Shipping</button>
                <button onClick={() => props.setShowSidebar(true)} className="bg-blue-100 font-bold text-blue-700 mx-2 px-2  md:px-4 py-2 rounded-md text-1xl  hover:bg-blue-300 transition duration-300"><HoldOrder/> Hold orders</button>
                <button onClick={() => props.setShowSidebar(true)} className="bg-blue-100 font-bold text-blue-700 mx-2 px-2  md:px-4 py-2 rounded-md text-1xl  hover:bg-blue-300 transition duration-300"> <Plus/> New Item</button>
                {/* <button onClick={()=>props.setShowSidebar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Shipping</button>
            <button onClick={()=>props.setShowSidebar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">Hold orders</button>
            <button onClick={()=>props.setShowSidebar(true)} className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-gray-600 transition duration-300">New Item</button> */}
            </div>
            <div className="mt-2 mx-4 py-3 px-4 flex justify-between text-blue-700 font-bold text-lg bg-blue-100">
                <div className="flex">
                <Account/>
                    <h4 >  Steve Jobs</h4>
                </div>
                <div className="">
                    <button onClick={()=>setShowUserModal(true)}><PlusCircle/></button>
                    <AddUser showUserModal={showUserModal} setShowUserModal={setShowUserModal} />
                 
                </div>
            </div>
            
                
            
            <div>
                <div className="mt-2 mx-4">

                    <table className="table-auto w-full max-h-56">

                        <tbody>
                            <tr className="border-2">
                                <td className="border-collapse" ><button onClick={() => props.setShowSidebar(true)} className=" text-black py-2  text-1xl font-medium "><Edit/></button></td>

                                <td >Malcolm LockyerLockyerLockyer</td>
                                <td>$ 190</td>
                                <td>
                                    <div className="flex">
                                        <button type="button" onclick="minus()" className="bg-gray-400 p-1 font-bold rounded-3xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <input id="item_count" type="number" value="1" className="max-w-[50px] font-bold font-mono py-1.5 px-1 mx-1.5
            block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500  focus:invalid:ring-red-500"/>

                                        <button type="button" onclick="plus()" className="bg-gray-400 p-1 font-bold rounded-3xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td>$ 190</td>
                                <td className="border-collapse" ><button className="text-red-600"><Trash/></button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-4">
                    <div className="py-2">
                        <table className="table-auto w-60 text-left">

                            <tbody>
                                <tr className="border-b-2">

                                    <td className="justify-start p-2"  >Sub Total</td>
                                    <td>$ 190</td>
                                </tr>
                                <tr className="border-b-2">

                                    <td className="p-2" >Tax</td>
                                    <td>$ 190</td>
                                </tr>
                                <tr className="border-b-2">

                                    <td className="p-2" >Shipping</td>
                                    <td>$ 190</td>
                                </tr>
                                <tr className="border-b-2">

                                    <td className="p-2" >Discount</td>
                                    <td>$ 190</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex justify-between mt-2 py-4 bg-blue-100">
                    <p className="font-bold text-blue-700 mx-6">Product Count</p>
                    <p className="font-bold text-blue-700 ml-60">Total:</p>
                    <p className="font-bold text-blue-700 mr-10">$ 200</p>
                </div>
                <div className="py-6 mx-1 flex md:justify-between">
                    <button onClick={() => props.setShowSidebar(true)} className="bg-red-100 font-bold text-red-700 mx-2 px-2  md:px-6 py-2 md:py-3 rounded-md text-xl  hover:bg-red-300 transition duration-300"><Cancel/> Cancel</button>
                    <button onClick={() => props.setShowSidebar(true)} className="bg-violet-100 font-bold text-violet-700 mx-2 px-2  md:px-6 py-2 md:py-3 rounded-md text-xl  hover:bg-violet-300 transition duration-300"><HandGrab/> Hold</button>
                    <button onClick={() => props.setShowSidebar(true)} className="bg-violet-100 font-bold text-violet-700 mx-2 px-2  md:px-6 py-2 md:py-3 rounded-md text-xl  hover:bg-violet-300 transition duration-300"><Discount/> Discount</button>
                    <button onClick={() => props.setShowSidebar(true)} className="bg-blue-100 font-bold text-blue-700 mx-2 px-2  md:px-6 py-2 md:py-3 rounded-md text-xl  hover:bg-blue-300 transition duration-300"><Pay/> Pay Now</button>

                </div>
            </div>
            

        </div>
    );
};

export default Cart;