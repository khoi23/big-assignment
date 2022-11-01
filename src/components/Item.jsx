import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../app/CartSlice";

const Item = ({ image, id, name, description, price }) => {
    const dispatch = useDispatch();

    const [cartQuantity, setCartQuantity] = useState(Number(1));

    const resetButton = () => {
        setCartQuantity(Number(1));
    };

    const onAddToCart = () => {
        const item = { image, id, name, description, price, cartQuantity };

        dispatch(setAddItemToCart(item));
    };
    return (
        <>
            <div className="flex items-center gap-8">
                <div className="flex w-[20%]">
                    <img
                        src={image}
                        alt={`img ${id}`}
                        className=" object-cover hover:scale-105 transition-all duration-75 ease-in-out"
                    />
                </div>
                <div className="flex w-[80%] gap-8 justify-between items-start">
                    <div className="flex w-[100%] gap-4 text-left  flex-col">
                        <h3 className="text-2xl font-medium">{name}</h3>
                        <h3>{description}</h3>
                        <span className="text-xl text-amber-700 ">
                            ${price}
                        </span>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="text-center">
                            <span className="pr-6 text-xl">Amount:</span>
                            <input
                                type={"number"}
                                className="w-[40%] text-xl border-none py-2 px-4 outline-none drop-shadow-sm"
                                value={cartQuantity}
                                onChange={(e) =>
                                    setCartQuantity(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className=" py-2 px-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg text-xl font-medium text-white"
                                onClick={() => (onAddToCart(), resetButton())}>
                                + Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Item;
