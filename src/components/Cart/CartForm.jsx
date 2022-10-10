import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectCartItems,
    selectCartState,
    selectTotalQty,
    setCloseCart,
} from "../../app/CartSlice";
import { selectSetConfirm, setConfirm } from "../../app/UserSlice";

const CartForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [nameB, setNameB] = useState(false);
    const [phone, setPhone] = useState("");
    const [phoneB, setPhoneB] = useState(false);
    const [postalCode, setPostalCode] = useState("");
    const [postalCodeB, setPostalCodeB] = useState(false);
    const [address, setAddress] = useState("");
    const [addressB, setAddressB] = useState(false);

    const [dataSubmit, setDataSubmit] = useState({});

    const ifButtonCofirm = useSelector(selectSetConfirm);

    const cartState = useSelector(selectCartState);

    useEffect(() => {
        if (cartState === false) {
            dispatch(setConfirm({ userState: false }));

            setPhoneB(false);
            setPostalCodeB(false);
            setAddressB(false);
            setNameB(false);
        }
    }, [cartState]);
    const onCartToggle = () => {
        dispatch(setCloseCart({ cartState: false }));
    };
    const handleBtnOrder = () => {
        dispatch(setConfirm({ userState: true }));
    };

    const cartItems = useSelector(selectCartItems);

    const cartQty = useSelector(selectTotalQty);
    const [buttonS, setButtonS] = useState(false);

    const handleSubmitValue = () => {
        if (name === "") {
            setNameB(true);
        }
        if (name !== "") {
            setNameB(false);
        }
        if (phone === "") {
            setPhoneB(true);
        }
        if (phone !== "") {
            setPhoneB(false);
        }
        if (postalCode === "") {
            setPostalCodeB(true);
        }
        if (postalCode !== "") {
            setPostalCodeB(false);
        }
        if (address === "") {
            setAddressB(true);
        }
        if (address !== "") {
            setAddressB(false);
        }

        if (
            name !== "" &&
            address !== "" &&
            Number(phone) &&
            Number(postalCode)
        ) {
            setDataSubmit({
                name: name,
                address: address,
                phone: phone,
                postalCode: postalCode,
                cartItems: cartItems,
                total: Math.floor(cartQty),
            });
            localStorage.setItem("data", JSON.stringify(dataSubmit));
            console.log(dataSubmit);
            setButtonS(!buttonS);
        }
    };

    useEffect(() => {
        // axios({
        //     method: "post",
        //     url: "https://625a91bf0ab4013f94a2d9a8.mockapi.io/orders",
        //     data: dataSubmit,
        // });
    }, [buttonS]);

    return (
        <div>
            {ifButtonCofirm && (
                <form>
                    <div className="flex mb-4 gap-4">
                        <div className=" w-[50%]">
                            <label
                                htmlFor="name"
                                className={`block font-bold text-sm mb-2`}>
                                Name
                            </label>
                            <input
                                type="text"
                                name="text"
                                id="name"
                                placeholder="hey siri"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`block w-full bg-transparent outline-none border-2  py-2 px-4  placeholder:divide-gray-500 focus:bg-slate-200 `}
                            />
                            {nameB && (
                                <p className="text-red-500 text-sm mt-2">
                                    A valid name is required.
                                </p>
                            )}
                        </div>
                        <div className=" w-[50%]">
                            <label
                                htmlFor="phone"
                                className={`block font-bold text-sm mb-2 `}>
                                Phone
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="phone"
                                placeholder="+84"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className={`block w-full bg-transparent outline-none border-2 py-2 px-4  placeholder:divide-gray-500 focus:bg-slate-200 `}
                            />
                            {phoneB && (
                                <p className="text-red-500 text-sm mt-2">
                                    A valid phone is required.
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex mb-4 gap-4">
                        <div className=" w-[70%]">
                            <label
                                htmlFor="address"
                                className={`block font-bold text-sm mb-2`}>
                                Address
                            </label>
                            <input
                                type="text"
                                name="text"
                                id="address"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className={`block w-full bg-transparent outline-none border-2  py-2 px-4  placeholder:divide-gray-500 focus:bg-slate-200 `}
                            />
                            {addressB && (
                                <p className="text-red-500 text-sm mt-2">
                                    A valid address is required.
                                </p>
                            )}
                        </div>
                        <div className=" w-[30%]">
                            <label
                                htmlFor="code"
                                className={`block font-bold text-sm mb-2 `}>
                                Postal Code
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="code"
                                placeholder="658693"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                                className={`block w-full bg-transparent outline-none border-2 py-2 px-4  placeholder:divide-gray-500 focus:bg-slate-200 `}
                            />

                            {postalCodeB && (
                                <p className="text-red-500 text-sm mt-2">
                                    A validCode is required.
                                </p>
                            )}
                        </div>
                    </div>
                </form>
            )}

            <div className="flex justify-end gap-4 mt-5">
                <button
                    className="py-2 px-8 rounded border-orange-600 border-2 hover:bg-orange-600 hover:text-white hover:-translate-y-1 duration-300"
                    onClick={onCartToggle}>
                    Close
                </button>

                {ifButtonCofirm ? (
                    <button
                        onClick={handleSubmitValue}
                        className="py-2 px-8 rounded bg-orange-600 text-white hover:-translate-y-1 duration-300">
                        Confirm
                    </button>
                ) : (
                    <button
                        onClick={handleBtnOrder}
                        className="py-2 px-8 rounded bg-orange-600 text-white hover:-translate-y-1 duration-300">
                        Order
                    </button>
                )}
            </div>
        </div>
    );
};

export default CartForm;
