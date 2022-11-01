import React from 'react';
// styles
import styles from '../Styles/UserProfile.module.css';
// avatar
import avatar from '../data/avatar3.png'
// icons
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { GrTasks } from 'react-icons/gr';
import { MdOutlineCancel } from 'react-icons/md';
// context
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {

    const { currentMode, currentColor, setProfile } = useStateContext();

    return (
        <div className={currentMode === "Dark" ? "dark" : ""}>
            <div className={styles.container}>
                <div className='flex items-center justify-between mt-7 ml-5'>
                    <p className='text-2xl font-semibold tracking-tight' style={{ color: currentColor }}>User Profile</p>
                    <MdOutlineCancel onClick={() => setProfile(false)} style={{ color: currentColor }} className='mr-8 text-2xl text-gray-600 cursor-pointer' />
                </div>
                <div className='border-1 border-color mt-3 mx-6'>
                </div>
                <div className='flex items-center gap-5 ml-5 mt-3'>
                    <img src={avatar} alt="" className='w-20 rounded-full' />
                    <div>
                        <p className='text-xl font-semibold' style={{ color: currentColor }}>Mohammad Pesraklou</p>
                        <p className='font-light' style={{ color: currentColor }}>Administrator</p>
                        <a className='font-light' style={{ color: currentColor }} href='mailto:mamad.p1994@gmail.com '>MailMe@gmail.com</a>
                    </div>
                </div>
                <div className='border-1 border-color mt-5 mx-6'>
                </div>
                <div className='flex flex-col justify-center ml-12 mt-5'>
                    <div className='flex items-center gap-x-12 mb-5 cursor-pointer'>
                        <BsCurrencyDollar style={{ color: currentColor }} className='text-2xl' />
                        <div>
                            <p className='font-semibold' style={{ color: currentColor }}>
                                My Profile
                            </p>
                            <p className='font-light style={{ color: currentColor }} text-gray-300'>
                                Account Settings
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-12 mb-5 cursor-pointer'>
                        <BsShield style={{ color: currentColor }} className='text-2xl' />
                        <div>
                            <p className='font-semibold' style={{ color: currentColor }}>
                                My InBox
                            </p>
                            <p className='font-light style={{ color: currentColor }} text-gray-300'>
                                Managers & Emails
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-12 mb-5 cursor-pointer'>
                        <GrTasks className='text-2xl' style={{ color: currentColor }} />
                        <div>
                            <p className='font-semibold' style={{ color: currentColor }}>
                                My Tasks
                            </p>
                            <p className='font-light style={{ color: currentColor }} text-gray-300'>
                                To Dos and Daily Tasks
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;