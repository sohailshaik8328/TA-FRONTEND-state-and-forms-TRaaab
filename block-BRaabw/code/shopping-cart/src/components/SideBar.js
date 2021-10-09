import React from 'react';
import '../stylesheets/index.css';


function SideBar(props) {
    let products = props.products
    
    let sizes = props.products.reduce((acc, cv) => {
        acc = acc.concat(cv.availableSizes);
        return acc;
    }, []);

    let uniqueSizes = [...new Set(sizes)];
    let {selectedSize} = props;
    return (
     <aside className="flex-20 sidebar">
         <div className="flex wrap">
              {
                  uniqueSizes.map(size => (
                      <span key={size} onClick={() => props.handleSize(size)} className={`size ${selectedSize.includes(size) ? "active" : ""}`}>{size}</span>
                  ))
              }
         </div>
     </aside>
    );
}

export default SideBar;
