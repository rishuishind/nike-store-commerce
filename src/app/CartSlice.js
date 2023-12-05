import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalQantity: 0,
    cartTotalAmount: 0
};

const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success('Item QTY increased')
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} added to cart`)
                state.totalItems += 1;
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));

        },

        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = removeItem;
            localStorage.setItem('cart', JSON.stringify(state.cartItems));

            toast.success(`${action.payload.title} Removed From Cart`);
        },
        setIncreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success('Item Qty increased');
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setDecreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.success('item Qty decreased');
            }
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            toast.success('cart items cleared');
        },
        setGetTotal: (state, action) => {
            let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQTY += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0,
                totalQTY: 0,
            });

            state.cartTotalAmount = totalAmount;
            state.cartTotalQantity = totalQTY;
        }
    }
});

export const { setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setIncreaseQuantity, setDecreaseItemQuantity, setClearCartItems, setGetTotal } = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartTotalQty = (state) => state.cart.cartTotalQantity
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount
export default CartSlice.reducer;