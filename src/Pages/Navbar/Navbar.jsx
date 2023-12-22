import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo2.gif';
import { FaBars } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const username = user?.displayName;
    const photoUrl = user?.photoURL;

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
                Swal.fire({
                    icon: 'success',
                    text: 'Sign Out Successfully',
                });
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <FaBars size={30} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/contact'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to={'/about'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-darkOne  font-semibold px-4 text-2xl'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={'/feature'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                            }
                        >
                            Feature
                        </NavLink>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img src={Logo}  alt="" />
                    <h1 className="text-xl font-lora">Task Management</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-8">
                        <NavLink
                            to={'/'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-black font-semibold px-4 text-2xl'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/contact'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-black font-semibold px-4 text-2xl'
                            }
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to={'/about'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-black font-semibold px-4 text-2xl'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={'/feature'}
                            className={({ isActive }) =>
                                isActive
                                    ? 'font-poppins text-darkOne font-semibold px-4 text-2xl'
                                    : 'font-poppins text-black font-semibold px-4 text-2xl'
                            }
                        >
                            Feature
                        </NavLink>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex gap-8">
                        <div className="flex justify-center items-center gap-4">
                            <h1 className="font-lora text-xl">{username}</h1>
                            <img
                                src={photoUrl}
                                width={40}
                                height={40}
                                className="border-darkOne border-2 rounded-full"
                                alt=""
                            />
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="bg-darkOne text-lightThree px-8 py-2 text-xl font-lora rounded-lg hover:bg-transparent hover:text-darkOne border-2 border-darkOne"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <button className="bg-darkOne text-lightThree px-8 py-2 text-xl font-lora rounded-lg hover:bg-transparent hover:text-darkOne border-2 border-darkOne">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;