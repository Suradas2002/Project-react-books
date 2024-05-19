import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom'; 

const Menu: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleNavbar = () => setToggleMenu(!toggleMenu);
    const hideNavbar = () => setToggleMenu(false);

    return (
        <div>
            <button  onClick={handleNavbar}>
                {toggleMenu ? <HiX /> : <HiMenuAlt3 className='w-[30px] h-[50px]' />}
            </button>
            <div className={` ${toggleMenu ? 'flex flex-col absolute inset-y-0 right-0 bg-black text-white w-[280px] p-[30px] ' : 'hidden' }`}>
                <Link className='text-center text-lg p-[20px]' to={'/'} onClick={hideNavbar}>HomePage</Link>
                <Link className='text-center text-lg pt-[20px]' to={'/Favoritebook'} onClick={hideNavbar}>Favorite</Link>
                {toggleMenu && (
                    <button onClick={hideNavbar} className="text-white text-xl absolute top-0 right-0 m-4 focus:outline-none">
                        <HiX />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Menu;