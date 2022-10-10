import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart } from "../../app/CartSlice";
import { selectSetConfirm, setConfirm } from "../../app/UserSlice";

const CartForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [address, setAddress] = useState("");

    const ifButtonCofirm = useSelector(selectSetConfirm);

    const onCartToggle = () => {
        dispatch(setCloseCart({ cartState: false }));
    };
    const handleBtnOrder = () => {
        dispatch(setConfirm({ userState: true }));
    };

    console.log(ifButtonCofirm);

    const dataUser = {
        name,
        phone,
        postalCode,
        address,
    };
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
                            <p className="text-red-500 text-sm mt-2">
                                A valid name is required.
                            </p>
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
                            <p className="text-red-500 text-sm mt-2">
                                A valid phone is required.
                            </p>
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
                            <p className="text-red-500 text-sm mt-2">
                                A valid name is required.
                            </p>
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
                            <p className="text-red-500 text-sm mt-2">
                                A valid phone is required.
                            </p>
                        </div>
                    </div>
                </form>
            )}

            <div className="flex justify-end gap-4">
                <button
                    className="py-2 px-8 rounded border-orange-600 border-2 hover:bg-orange-600 hover:text-white hover:-translate-y-1 duration-300"
                    onClick={onCartToggle}>
                    Close
                </button>
                <button
                    onClick={handleBtnOrder}
                    className="py-2 px-8 rounded bg-orange-600 text-white hover:-translate-y-1 duration-300">
                    {ifButtonCofirm ? "Confirm" : "Order"}
                </button>
            </div>
        </div>
    );
};

export default CartForm;
