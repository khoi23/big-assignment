import React, { useEffect, useState } from "react";
import CartItem from "./Cart/CartItem";
import CartForm from "./Cart/CartForm";
import CartEmpty from "./Cart/CartEmpty";
import CartCount from "./Cart/CartCount";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartState,
    selectTotalAmount,
    selectTotalQty,
    setCloseCart,
    setGetTotals,
} from "../app/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState);
    const cartItems = useSelector(selectCartItems);
    const cartQty = useSelector(selectTotalQty);
    const totalAmout = useSelector(selectTotalAmount);

    useEffect(() => {
        dispatch(setGetTotals());
    }, [cartItems, dispatch]);
    console.log(cartItems);
    const onCartToggle = () => {
        dispatch(setCloseCart({ cartState: false }));
    };

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250]  ${
                    ifCartState
                        ? "opacity-100 visible translate-x-0"
                        : "opacity-0 invisible translate-x-8"
                }`}>
                <div
                    className={`blur-effect-theme-cart m-auto w-2/5 min-h-fit mt-10 py-5 px-10  ${
                        ifCartState
                            ? "opacity-100 visible translate-x-0"
                            : "opacity-0 invisible translate-x-8"
                    }`}>
                    <CartCount
                        onCartToggle={onCartToggle}
                        totalAmout={totalAmout}
                    />

                    {cartItems.length === 0 ? (
                        <CartEmpty onCartToggle={onCartToggle} />
                    ) : (
                        <div>
                            <div
                                className={`flex items-start justify-start flex-col gap-6 lg:gap-y-4 overflow-y-scroll max-h-[41vh] scroll-smooth drop-shadow bg-slate-200 p-2 rounded-sm mb-6`}>
                                {cartItems.map((val, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center  justify-between gap-5 w-full">
                                        <CartItem val={val} />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-start justify-between mb-2">
                                <h5 className=" font-semibold">Subtotal:</h5>
                                <span className="button-theme bg-slate-900 text-white">
                                    ${Math.floor(cartQty)}
                                </span>
                            </div>
                        </div>
                    )}

                    <CartForm />
                    <div className="flex justify-end gap-4">
                        <button
                            className="py-2 px-8 rounded border-orange-600 border-2 hover:bg-orange-600 hover:text-white hover:-translate-y-1 duration-300"
                            onClick={onCartToggle}>
                            Close
                        </button>
                        <button className="py-2 px-8 rounded bg-orange-600 text-white hover:-translate-y-1 duration-300">
                            Order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
