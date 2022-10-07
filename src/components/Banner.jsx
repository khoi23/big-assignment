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
                        Lorem ipsum dolor sit amet
                    </h1>
                    <h4 className="text-xl lg:text-[1rem] md:text-[0.85rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h4>
                    <p className="lg:text-[0.75rem]">
                        Soluta nisi voluptatem magni, tenetur architecto earum
                        repellat vitae aliquam rerum repellendus commodi rem vel
                        dicta, nostrum dolorum tempora qui! Illum,
                        repudiandae?Soluta nisi voluptatem magni,
                    </p>
                </div>
            </div>
        </>
    );
};

export default Banner;
