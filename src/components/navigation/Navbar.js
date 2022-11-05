import React from 'react';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import {ReactComponent as Logo} from '../../images/icons/logo-bunastories.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <>
        <div className='flex items-center justify-between my-4 absolute w-full sidePadding'>
            <div className='relative h-[48px] w-[48px]'>
                <Link to="/">
                    <Logo className='absolute left-0 right-0 w-full h-full z-10' />
                </Link>
            </div>
            <div className='flex items-center'>
            <SearchButton />
            <MenuButton />
            </div>
        </div>
        </>
    );
}

export default Navbar;