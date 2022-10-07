import React from "react";
import Item from './Item'

const Product = ({ listProduct }) => {
    return (
        <>
            <div className=" flex items-center justify-center flex-col pb-16 mt-16">
                <div className="bg-slate-100  p-12 lg:p-6 w-[60vw] xl:w-[50vw] lg:w-[80vw] sm:w-[90vw] text-center flex gap-8 lg:gap-2 flex-col drop-shadow-2xl rounded-lg">
                    {listProduct.map((val, i) => (
                        <Item {...val} key={i}/>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Product;
