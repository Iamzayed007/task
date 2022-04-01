import React from 'react';
import Cart from '../Cart/Cart';

import Products from '../Products/Products';

const Locations = (props) => {
    return (
        <div className="p-2 grid md:grid-cols-2 gap-4">
            <div className="justify-start">
                <Cart showSidebar={props.showSidebar} setShowSidebar={props.setShowSidebar} />
            </div>
            <div>
                <Products showCategorybar={props.showCategorybar} setShowCategorybar={props.setShowCategorybar} />
                
            </div>
        </div>
    );
};

export default Locations;