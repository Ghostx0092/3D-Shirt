import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import {headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation} from '../config/motion';
import state from '../store';
import { CustomButton } from '../components';


const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
             <motion.header {...slideAnimation("down")}>
                <img src='./threejs.png'
                alt="logo"
                className='w-8 h-8 object-contain'/>
             </motion.header>
             <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text'>
                        LET'S <br className='xl:block hidden' /> DO IT.
                    </h1>
                </motion.div>
                <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                    <p className='max-w-md font-normal text-gray-600 text-base'>Step into the future of fashion with our groundbreaking <strong><span>3D</span></strong> shirt designs. Whether it's a casual day out, a special occasion, or a statement piece, we have the 3D shirt that fits every moment of your life. Get started now and turn heads wherever you go!</p>
                    <CustomButton type='filled' title='Customize it' handleClick={()=> state.intro =false} customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
                </motion.div>
             </motion.div>
            </motion.section>
        )} 
    </AnimatePresence>
  )
}

export default Home