import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";

const ShoppingCartIcon = FaShoppingCart as React.FC;

function Cart() {
    const { carts, deleteCartItem, isEmpty } = useCart();

    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const handleCheckItem = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id));
        } else {
            setCheckedItems([...checkedItems, id]);
        }
    };

    const handleItemDelete = (id: number) => {
        deleteCartItem(id);
    };

    return (
        <>
            <Title size="lg">장바구니</Title>
            <CartStyle>
                {!isEmpty && (
                    <>
                        <div className="content">
                            {carts.map((cart) => (
                                <CartItem
                                    key={cart.id}
                                    cart={cart}
                                    checkedItems={checkedItems}
                                    onCheck={handleCheckItem}
                                    onDelete={handleItemDelete}
                                />
                            ))}
                        </div>
                        <div className="summary"></div>
                    </>
                )}
                {isEmpty && (
                    <Empty
                        title="장바구니가 비어있습니다."
                        icon={<ShoppingCartIcon />}
                        description={<>장바구니를 채워보세요.</>}
                    />
                )}
            </CartStyle>
        </>
    );
}

const CartStyle = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 0 0 0;

    .content {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 12px;
    }

    .summary {
        display: flex;
    }
`;

export default Cart;
