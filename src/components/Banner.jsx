import React from "react";
import banner from "../assets/1.avif";

const Banner = () => {
    return (
        <>
            <div className="bg-banner clip-path w-full h-[50vh] absolute "></div>
            <div className=" w-full h-[30vh]"></div>
            <div className=" flex items-center justify-center flex-col">
                <div className="bg-theme-cart py-8 px-12 lg:py-4 lg:px-6 text-white max-w-[40vw] xl:max-w-[50vw] lg:max-w-[80vw] sm:max-w-[90vw] text-center flex gap-8 lg:gap-2 flex-col drop-shadow-xl rounded-lg">
                    <h1 className="text-4xl xl:text-3xl lg:text-2xl md:text-xl font-semibold ">
                        Everything you need.
                    </h1>
                    <h4 className="text-xl lg:text-[1rem] md:text-[0.85rem]">
                        Discover classic & new menu items, find deals and enjoy
                        seamless ordering for delivery and carryout.
                    </h4>
                    <p className="lg:text-[0.75rem]">
                        Pizza is a dish of Italian origin consisting of a
                        usually round, flat base of leavened wheat-based dough
                        topped with tomatoes, cheese, and often various other
                        ingredients, which is then baked at a high temperature,
                        traditionally in a wood-fired oven. A small pizza is
                        sometimes called a pizzetta.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Banner;
