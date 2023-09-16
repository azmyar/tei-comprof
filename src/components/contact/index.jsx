import {useEffect, useState} from 'react'
import LogoWhite from '../../LogoWhite.png'
import Logo from '../../Logo.png'
import Homebg from '../../Homebg.png'


import LocationLogo from '../../LocationLogo.png'
import PhoneLogo from '../../PhoneLogo.png'
import EmailLogo from '../../EmailLogo.png'

import Placeholder4 from '../../Placeholders/Placeholder4.jpg'

import '../index.css';

import idWhite from '../../white.png'
import enWhite from '../../white-1.png'
import idBlue from '../../blue.png'
import enBlue from '../../blue-1.png'

const Home = () => {

    // Navigation Bar
    const [navVisible, setNavVisible] = useState(true);
    const [textVisible, setTextVisible] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let navLimit = 50;
        let textLimit = 150;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        
        if (winScroll > navLimit) {
            navVisible &&    
                setNavVisible(false);
        } else {
                setNavVisible(true);
        }

        if (winScroll > textLimit) {
            textVisible &&    
                setTextVisible(false);
        }
    };

    // Moving Divs

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Language

    const [lang, langSwitch] = useState(true);

    return(
        <div className='Container flex flex-col justify-center items-center' style={{backgroundImage:`url(${Homebg})`}}>
            
            {/* Navigation Bar */}
            <div className='Wrapper' >

                {!navVisible && 
                    <div className="StickyNavBar">

                        <a href="/tei-comprof">
                            <img src={Logo} className='w-[80px] md:w-[100px]' alt='logo' />    
                        </a>

                        <div className="NavButtonWrapper">
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof">Home</a> :
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof">Beranda</a>}
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof/about">About</a>:
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof/about">Tentang</a>}
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof/contact">Contact</a>:
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/tei-comprof/contact">Kontak</a>}
                            {lang ? <img src={enBlue} onClick={() => langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/> :
                            <img src={idBlue} onClick={() => langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/>}
                        </div>

                    </div>
                }
                
                {navVisible && 
                    <div className="InfoBar hidden md:flex">

                            <div className='InfoWrapper justify-center'>

                                <a className='SubInfoWrapper'>
                                    <img src={PhoneLogo} className='InfoLogo' alt='logo' />  
                                    <div className='Info'>021-4892014</div>  
                                </a>

                                <a className='SubInfoWrapper'>
                                    <img src={EmailLogo} className='InfoLogo' alt='logo' />  
                                    <div className='Info'>teindonesia@yahoo.co.id</div>
                                </a>

                                <a className='SubInfoWrapper'>
                                    <img src={LocationLogo} className='InfoLogo' alt='logo' />  
                                    <div className='Info'>Jalan Kayu Putih VII Blok A No.8 Pulogadung</div>
                                </a>

                            </div>
                        
                            <div className='BrochureButton hidden lg:flex text-center ml-[8%]'>
                                <a href='https://drive.google.com/uc?id=1zGLxiEIxzBmqU6BopWQnEpiMzaB9ovJ3&export=download' className='cursor-pointer'>
                                    {lang? <p>Download Brochure</p> : <p>Unduh Brosur</p>}
                                </a>
                            </div>

                    </div>
                }

                {navVisible && 
                    <div className="NavBar top-0 md:top-[55px]">
                        <a href="/tei-comprof">
                            <img src={LogoWhite} className='w-[80px] md:w-[100px]' />    
                        </a>
                        <div className="NavButtonWrapper">
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof">Home</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof">Beranda</a>}
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof/about">About</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof/about">Tentang</a>}
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof/contact">Contact</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/tei-comprof/contact">Kontak</a>}
                            {lang ? <img src={enWhite} onClick={() => langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/> :
                            <img src={idWhite} onClick={()=> langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/>}
                        </div>
                    </div>
                }

            </div>
            
            {/* Carousel */}
            <div className='flex items-center justify-center max-w-auto h-[750px] w-full m-auto relative'>

                <div style={{backgroundImage: `url(${Placeholder4})`}} className='w-full h-full bg-center bg-cover duration-500 brightness-[0.55] absolute'></div>

                {lang? <div className='max-w-[1000px] mt-[3%] flex flex-col items-center absolute text-white '>
                    <p className='text-center text-6xl md:text-8xl font-bold'>Let's Discuss Further</p>
                </div>:
                <div className='max-w-[1000px] mt-[3%] flex flex-col items-center absolute text-white '>
                    <p className='text-center text-6xl md:text-8xl font-bold'>Diskusi Dengan Kami</p>
                </div>}
                
            </div>

            <div className=' relative flex flex-col justify-around mt-[-50px] w-[380px] md:min-w-[750px] h-[500px] md:h-[600px] items-center border-t-2 rounded-md drop-shadow-xl bg-white'
            style={{ bottom: `${10/100 * scrollY}px` }}>
                <p className='text-xl font-bold text-[#52A244]'>Contact</p>

                {lang? <p className='text-4xl font-bold'>Get in Touch</p>:
                <p className='text-4xl font-bold'>Hubungi Kami</p>}

                <img src={Logo} className='w-[150px] md:w-[200px] h-auto' alt='logo' />  
                <p className='font-semibold text-2xl text-center'>PT. Trisi Energi Indonesia © 2023</p>
  
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-lg text-center pl-[20px] pr-[20px]'>Jalan Kayu Putih VII Blok A No.8 Pulogadung Jakarta Timur 13260</p>
                    <span><a href='/' className='text-lg font-bold'>teindonesia@yahoo.co.id</a></span>
                    <p className='text-lg font-bold'>021-4892014</p>
                </div>
            </div>

        </div>
    )
}

export default Home