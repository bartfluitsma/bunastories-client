import React from 'react';
import Navbar from './navigation/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <div className='px-mobileSidePadding my-4 md:px-tabletSidePadding lg:px-desktopSidePadding'>
            <Navbar />
            {children}

            </div>
        </>
    );
}

export default Layout;