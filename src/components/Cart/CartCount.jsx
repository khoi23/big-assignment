import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setClearCartItems } from "../../app/CartSlice";

const CartCount = ({ onCartToggle }) => {
    const dispatch = useDispatch();
    const onClearCart = () => {
        dispatch(setClearCartItems({}));
    };
    return (
        <div className="bg-white h-11 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
                <div
                    className="grid items-center cursor-pointer"
                    onClick={onCartToggle}>
                    <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2] hover:-translate-x-0.5 duration-500" />
                </div>
                <div className="grid items-center">
                    <h1 className="text-base font-medium text-slate-900">
                        Your Cart{" "}
                        <span className=" bg-orange-600 rounded px-2 py-1 text-slate-100 font-normal text-sm">
                            (0 Items)
                        </span>
                    </h1>
                </div>
            </div>
            <div className="flex items-center">
                <button
                    type="button"
                    className="rounded bg-theme-cart active:scale-90 p-0.5 hover:-translate-y-0.5 duration-500"
                    onClick={onClearCart}>
                    <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
                </button>
            </div>
        </div>
    );
};

export default CartCount;
