import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItem = ({
    val: { id, image, name, description, price, cartQuantity },
}) => {
    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(
            setRemoveItemFromCart({
                id,
                image,
                name,
                description,
                price,
                cartQuantity,
            })
        );
    };
    const onIncreaseItem = () => {
        dispatch(
            setIncreaseItemQTY({
                id,
                image,
                name,
                description,
                price,
                cartQuantity,
            })
        );
    };
    const onDecreaseItem = () => {
        dispatch(
            setDecreaseItemQTY({
                id,
                image,
                name,
                description,
                price,
                cartQuantity,
            })
        );
    };
    return (
        <>
            <div className="relative rounded hover:scale-105 transition-all duration-75 ease-in-out grid items-center overflow-hidden w-[25%]">
                <img
                    src={image}
                    alt=""
                    className=" h-auto object-fill lg:w-28"
                />
            </div>
            <div className="flex justify-between mr-auto">
                <div className="flex flex-col gap-2">
                    <h4 className="text-2xl font-medium">{name}</h4>
                    <h6 className=" text-slate-800">${price}</h6>
                    <div className="flex items-center justify-start gap-4">
                        <button
                            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                            onClick={onDecreaseItem}>
                            <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                        </button>
                        <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                            {cartQuantity}
                        </div>
                        <button
                            className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
                            onClick={onIncreaseItem}>
                            <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid items-center gap-5">
                <div className="grid items-center justify-center">
                    <h1 className="text-lg lg:text-base text-slate-900 font-medium">
                        ${Math.floor(cartQuantity * price)}
                    </h1>
                </div>
                <div className="grid items-center justify-center">
                    <button
                        type="button"
                        className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
                        onClick={onRemoveItem}>
                        <TrashIcon className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartItem;
