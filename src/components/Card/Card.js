import React from 'react';

const Card = (props) => {
    const {name, price,img} = props.product
    
        console.log(props.product);
    
    return (
        <div >
               
    <div className="flex flex-col shadow-md cursor-pointer w-44 hover:-translate-y-1 duration-300">
       
        <div className="inline relative group h-48">
        
            <img className="absolute rounded-t object-cover h-full w-full"
                src={img}
                alt="Product Preview" />

             
        </div>

        {/* <!-- Body --> */}
        <div className="flex flex-col bg-white rounded-b p-3">
            {/* <!-- Title --> */}
            <div className="text-sm font-semibold text-gray-900 hover:underline truncate">
                {name}
            </div>

     

            {/* <!-- Price --> */}
            <div className="text-sm text-gray-600 font-bold mt-4 mb-1">
                {price}

            </div>

     
        </div>
    </div>



        </div>
    );
};

export default Card;