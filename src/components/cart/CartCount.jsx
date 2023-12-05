/* eslint-disable react/prop-types */
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useDispatch } from "react-redux"
import { setClearCartItems } from '../../app/CartSlice';
const CartCount = ({ onCartToggle, totalQty }) => {
    const dispatch = useDispatch();
    const clearCart = () => {
        dispatch(setClearCartItems());
    }
    return (
        <>
            <div className='bg-white h-11 items-center px-3 flex justify-between sticky top-0 left-0 right-0 w-full'>
                <div className='flex items-center gap-3'>
                    <div onClick={onCartToggle} className='grid items-center cursor-pointer'>
                        <ChevronDoubleLeftIcon className='icon-style w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]' />
                    </div>
                    <div className='grid items-center'>
                        <h1 className='text-base font-medium text-slate-900'>Your Cart <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs'>{totalQty} ( Items)</span> </h1>
                    </div>
                </div>
                <div className='flex items-center '>
                    <button onClick={clearCart} type='button' className='rounded bg-theme-cart active:scale-90 p-0.5'>
                        <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartCount