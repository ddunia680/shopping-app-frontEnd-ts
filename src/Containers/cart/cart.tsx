// import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { CartItem } from '../../Components/cartItem/cartItem';
import Backdrop from '../../Components/Backdrop/backdrop';
import { motion } from 'framer-motion';

import appleWatch from '../../assets/pic1.png';
import { useAppSelector } from '../../store/hooks';
// impot useAppDispatch

interface enteredParam {
  closeModal: () => void,
}

const slideInOut = {
    hidden: {
      x: '100vw',
      opacity: 0
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 30,
        stiffness: 500
      },
      exit: {
        x: '100vw',
        opacity: 0
      },
    }
}


export const Cart = ({ closeModal }: enteredParam) => {
  const cartItems = useAppSelector(state => state.cartOps.cartItems);
  const totalPrice = useAppSelector(state => state.cartOps.totalAmount);

  return (
    <Backdrop onClick={() => closeModal()}>
      <motion.div 
        className='absolute right-1 top-0 z-100 bg-purple-200 w-[100vw] md:w-[25rem] h-[100vh] border-l-[2px] border-pink-950 flex 
        flex-col justify-between items-start border-r-[2px]' onClick={e => e.stopPropagation()}
        variants={slideInOut}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
          <div className='flex flex-row justify-between items-center px-[0.5rem] py-[1rem] w-[100%]'>
              <ArrowLeftIcon title='back?' className='w-[1rem] text-blue-900 font-extrabold' onClick={() => closeModal()}/>
              <h2 className='font-extrabold text-lg text-purple-950'>My Cart</h2>
              <p className='text-blue-200'>.</p>
          </div>
          <div className='bg-purple-300 w-[90%] mx-auto h-[60%] rounded-2xl flex flex-col justify-start items-start overflow-hidden p-[0.5rem] 
          overflow-y-auto '>
            {!cartItems.length ?
              <p className='mx-auto'>Not Items in the cart</p> 
            : 
              cartItems.map(itm => (
                <CartItem image={appleWatch} key={itm.id} id={itm.id} name={itm.name} pieces={itm.count} />
              ))}
              
          </div>
          {/* <p className='mx-auto font-semibold'>No Items In the Cart</p> */}
          <div className='h-[15%] w-[100%] bg-pink-950 rounded-tl-3xl rounded-tr-3xl px-[1rem] flex flex-row justify-evenly items-center 
          '>
            <h2 className='text-white text-lg font-semibold'>Total Amount: <span className='text-orange-200'>$ {totalPrice.toFixed(2)}</span></h2>
            <button className='px-[1rem] py-[0.5rem] bg-gradient-to-br from-emerald-400 to-emerald-700 text-white rounded-xl' >Oder Now</button>
          </div>

      </motion.div>
    </Backdrop>
  )
}
