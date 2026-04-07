import { useEffect, useState } from "react";
import { Cart } from "../models/cart.model";
import { fetchCart } from "../api/carts.api";

export const useCart = () => {
    const [carts, setCarts] = useState<Cart[]>([]);
    const [isEmpty, setisEmpty] = useState(true);

    useEffect(() => {
        fetchCart().then((carts) => {
            setCarts(carts);
            setisEmpty(carts.length === 0);
        });
    }, []);

    return { carts, isEmpty };
};
