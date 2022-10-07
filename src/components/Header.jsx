import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    HeartIcon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";

import logo from "../assets/react.svg";
import { selectTotalAmount, setOpenCart } from "../app/CartSlice";

const Header = () => {
    const [navState, setNavState] = useState(false);
    const totalAmout = useSelector(selectTotalAmount);

    const dispatch = useDispatch();

    const onCartToggle = () => {
        dispatch(setOpenCart({ cartState: true }));
    };

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);

        return () => {
            window.removeEventListener("scroll", onNavScroll);
        };
    }, []);
    return (
        <>
            <header
                className={
                    "fixed top-0 left-0 right-0 flex items-center justify-center opacity-100 z-[25] blur-effect-theme"
                }>
                <nav className="flex items-center justify-between food-container py-4">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-16 h-auto `}
                        />
                    </div>
                    <ul className="flex items-center justify-center gap-4">
                        <li className="grid items-center">
                            <MagnifyingGlassIcon
                                className={`icon-style ${
                                    navState &&
                                    "text-slate-900 transition-all duration-300"
                                }`}
                            />
                        </li>
                        <li className="grid items-center">
                            <HeartIcon
                                className={`icon-style ${
                                    navState &&
                                    "text-slate-900 transition-all duration-300"
                                }`}
                            />
                        </li>
                        <li className="grid items-center">
                            <button
                                type="button"
                                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                                onClick={onCartToggle}>
                                <ShoppingBagIcon
                                    className={`icon-style ${
                                        navState &&
                                        "text-slate-900 transition-all duration-300"
                                    }`}
                                />
                                <div
                                    className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                                        navState
                                            ? " bg-orange-600 text-slate-100 shadow-orange-600"
                                            : "bg-slate-100 text-orange-600 shadow-slate-100"
                                    }`}>
                                    {totalAmout}
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
