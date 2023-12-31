/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { setDecreaseItemQuantity, setIncreaseQuantity, setRemoveItemFromCart } from "../../app/CartSlice.js";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {

    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }));
    }

    const onIncreaseItem = () => {
        dispatch(setIncreaseQuantity({ id, title, text, img, color, shadow, price, cartQuantity }));
    }

    const onDecreaseItem = () => {
        dispatch(setDecreaseItemQuantity({ id, title, text, img, color, shadow, price, cartQuantity }));
    }

    return (
        <>
            <div className='flex items-center justify-between w-full px-5'>
                <div className='flex items-center gap-5'>
                    <div className={` bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
                        <img src={img} alt={`img/cart-items/${id}`} className='w-36 h-auto object-fill lg:w-28' />
                    </div>
                    <div className='grid items-center gap-4'>
                        <div className='grid items-center leading-none'>
                            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
                            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
                        </div>
                        <div className="flex items-center justify-around w-full">
                            <button type='button' onClick={onDecreaseItem} className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'><MinusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' /></button>
                            <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
                            <button type='button' onClick={onIncreaseItem} className='bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90'><PlusIcon className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]' /></button>
                        </div>
                    </div>
                </div>
                <div className='grid items-center gap-5'>
                    <div className="grid items-center justify-center">
                        <h1 className="text-lg lg:text-base text-slate-900 font-medium">Rs {price * cartQuantity}</h1>
                    </div>
                    <div className="grid items-center justify-center">
                        <button type='button' onClick={onRemoveItem} className='bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer'>
                            <TrashIcon className='w-5 h-5 text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem