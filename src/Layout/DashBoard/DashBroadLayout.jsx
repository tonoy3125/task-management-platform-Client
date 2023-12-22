import { NavLink } from 'react-router-dom';

import { FaRegEdit } from "react-icons/fa";
import { MdAccessibilityNew } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

const DashBroadLayout = () => {

    return (
        <div>
            <ul className="space-y-2 font-medium">
                <NavLink to='/dashboard/newtask'>
                    <li>
                        <div className="flex items-center p-2 text-black font-bold  hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <MdAccessibilityNew className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">New Task</span>
                        </div>
                    </li>
                </NavLink>
                <NavLink to='/dashboard/edittask'>
                    <li>
                        <div className="flex items-center p-2 text-black font-bold  hover:text-black rounded-lg hover:bg-gray-100  group">
                            <FaRegEdit className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">Edit</span>
                        </div>
                    </li>
                </NavLink>




                <hr className="h-[2px] mt-3" />
                <NavLink to='/'>
                    <li className="mt-3">
                        <div className="flex items-center p-2 text-white hover:text-black rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <IoHomeOutline className="text-base lg:text-xl" />
                            <span className="ms-3 lg:text-xl">Home</span>
                        </div>
                    </li>
                </NavLink>

            </ul>
        </div>
    );
};

export default DashBroadLayout;