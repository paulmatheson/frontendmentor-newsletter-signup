import './style.css'
import { useState, useEffect } from 'react'
import desktopImg from './images/illustration-sign-up-desktop.svg'
import mobileImg from './images/illustration-sign-up-mobile.svg'

function Header() {

    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px');

        const updateIsMobile = (e) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addListener(updateIsMobile);

        return () => mediaQuery.removeListener(updateIsMobile);
    }, []);


    return (
        <header className='App-header'>
            <div>
                <img src={isMobile ? mobileImg : desktopImg} alt="Image" />
            </div>
        </header>
    )
}

export default Header