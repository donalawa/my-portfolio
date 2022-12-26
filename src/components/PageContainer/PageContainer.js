import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import MobileNav from '../MobileNav/MobileNav';

import './PageContainer.css';


function PageContainer({ children, name }) {
    return (
        <div>
            <div className="main-content">
                <div className="top">
                    <Footer />
                    <MobileNav />
                    <div className="main-info">
                        { children }
                    </div>
                </div>
                <div className="bottom">
                    <Navbar pageName={name}/>
                </div>
            </div>
        </div>
    );
}

export default PageContainer;