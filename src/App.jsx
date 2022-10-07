import React, { useEffect, useState } from "react";
import axios from "axios";

import Banner from "./components/Banner";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import { selectCartState } from "./app/CartSlice";
import Product from "./components/Product";

const App = () => {
    const [listProduct, setListProduct] = useState([]);
    const ifCartState = useSelector(selectCartState);

    useEffect(() => {
        axios
            .get("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals")
            .then(({ data }) => {
                setListProduct(data);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className={`${ifCartState ? "" : ""}`}>
            <Header />
            <Cart listProduct={listProduct} />
            <main className="bg-slate-700">
                <Banner />
                <Product listProduct={listProduct} />
            </main>
        </div>
    );
};

export default App;
