import React from 'react';
// styles
import styles from '../Styles/UserProfile.module.css';
// avatar
import avatar from '../data/avatar3.png'
import avatar1 from '../data/avatar.jpg'
import avatar2 from '../data/avatar2.jpg'
// icons
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { GrTasks } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
// context
import { useStateContext } from '../contexts/ContextProvider';

const Notifications = () => {
    const { currentMode, currentColor, setNotif } = useStateContext();

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className={styles.container}>
                <div className='flex items-center justify-between mt-7 ml-5'>
                    <p className='text-2xl font-semibold tracking-tight' style={{ color: currentColor }}>Notifications</p>
                    <MdOutlineCancel onClick={() => setNotif(false)} style={{ color: currentColor }} className='mr-8 text-2xl text-gray-600 cursor-pointer' />
                </div>
                <div className='border-1 border-color mt-3 mx-6'>
                </div>
                <div className='flex items-center gap-5 ml-5 mt-3'>
                    <img src={avatar} alt="" className='w-20 rounded-full' />
                    <div>
                        <p className='text-xl font-semibold' style={{ color: currentColor }}>Mohammad Pesraklou</p>
                        <p className='font-light' style={{ color: currentColor }}>New Messages</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 ml-5 mt-3'>
                    <img src={avatar1} alt="" className='w-20 rounded-full' />
                    <div>
                        <p className='text-xl font-semibold' style={{ color: currentColor }}>John Stones</p>
                        <p className='font-light' style={{ color: currentColor }}>New Email </p>
                    </div>
                </div>
                <div className='flex items-center gap-5 ml-5 mt-3'>
                    <img src={avatar2} alt="" className='w-20 rounded-full' />
                    <div>
                        <p className='text-xl font-semibold' style={{ color: currentColor }}>Alicia lee</p>
                        <p className='font-light' style={{ color: currentColor }}>New Email
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;