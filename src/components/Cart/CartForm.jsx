import React from "react";

const CartForm = () => {
    return (
        <div>
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
                            className={`block w-full bg-transparent outline-none border-2  py-2 px-4  placeholder-black focus:bg-slate-200 `}
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
                            className={`block w-full bg-transparent outline-none border-2 py-2 px-4  placeholder-black focus:bg-slate-200 `}
                        />
                        <p className="text-red-500 text-sm mt-2">
                            A valid phone is required.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <label
                        htmlFor="address"
                        className={`block font-bold text-sm mb-2 `}>
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Ha Noi Viet Nam"
                        className={`block w-full bg-transparent outline-none border-2 py-2 px-4  placeholder-black focus:bg-slate-200 `}
                    />
                    <p className="text-red-500 text-sm mt-2">
                        A valid address is required.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default CartForm;
