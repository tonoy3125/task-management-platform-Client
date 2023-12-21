import { NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';

const DashBroadLayout = () => {
    const { user } = useContext(AuthContext);
    const loginUserName = user?.displayName;
    const photoUrl = user?.photoURL;

    return (
        <div>
            <div className="w-64 min-h-screen bg-lightOne">
                <div className="px-8 py-12">
                    <h1 className="font-lora font-[900] text-[23px] text-darkOne uppercase">
                        {loginUserName}
                    </h1>
                    <img
                        src={photoUrl}
                        width={100}
                        height={100}
                        className="rounded-lg border-2 border-darkTwo"
                        alt=""
                    />
                </div>
                <ul className="px-8">
                    <div className="flex flex-col gap-8">
                        <li>
                            <NavLink
                                to="/dashboard/newtask"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-3xl font-semibold font-lora'
                                        : 'text-3xl text-lightThree font-semibold font-lora'
                                }
                            >
                                New Task
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/edittask"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-3xl font-semibold font-lora'
                                        : 'text-3xl text-lightThree font-semibold font-lora'
                                }
                            >
                                Edit task
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashBroadLayout;