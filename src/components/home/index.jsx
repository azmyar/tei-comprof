import {useEffect, useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import LogoWhite from '../../LogoWhite.png'
import Logo from '../../Logo.png'
import Homebg from '../../Homebg.png'

import LocationLogo from '../../LocationLogo.png'
import PhoneLogo from '../../PhoneLogo.png'
import EmailLogo from '../../EmailLogo.png'

import Placeholder1 from '../../Placeholders/Placeholder1.jpg'
import Placeholder2 from '../../Placeholders/Placeholder2.jpg'
import Placeholder4 from '../../Placeholders/Placeholder4.jpg'

import vendors from '../../vendors.png'

import idWhite from '../../white.png'
import enWhite from '../../white-1.png'
import idBlue from '../../blue.png'
import enBlue from '../../blue-1.png'


import '../index.css';

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

    // Carousel

    const slides = [
        Placeholder1,
        Placeholder2,
        Placeholder4
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide? slides.length-1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

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
        <div className='Container' style={{backgroundImage:`url(${Homebg})`}}>
            
            {/* Navigation Bar */}
            <div className='Wrapper' >

                {!navVisible && 
                    <div className="StickyNavBar">

                        <a href="/">
                            <img src={Logo} className='w-[80px] md:w-[100px]' alt='logo' />    
                        </a>

                        <div className="NavButtonWrapper">
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/">Home</a> :
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/">Beranda</a>}
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/about">About</a>:
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/about">Tentang</a>}
                            {lang? <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/contact">Contact</a>:
                            <a className="StickyNavButton ml-[20px] md:ml-[50px] underline-hover-effect-blue" href="/contact">Kontak</a>}
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
                        <a href="/">
                            <img src={LogoWhite} className='w-[80px] md:w-[100px]' />    
                        </a>
                        <div className="NavButtonWrapper">
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/">Home</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/">Beranda</a>}
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/about">About</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/about">Tentang</a>}
                            {lang? <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/contact">Contact</a>:
                            <a className="NavButton ml-[20px] md:ml-[50px] underline-hover-effect-white" href="/contact">Kontak</a>}
                            {lang ? <img src={enWhite} onClick={() => langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/> :
                            <img src={idWhite} onClick={()=> langSwitch(!lang)} className='w-[30px] md:w-[40px] ml-[20px] md:ml-[50px] cursor-pointer'/>}
                        </div>
                    </div>
                }

            </div>
            
            {/* Carousel */}
            <div className='flex items-center justify-center w-[100%] h-[750px] w-full m-auto relative'>

                <div style={{backgroundImage: `url(${slides[currentIndex]})`}} className='w-full h-full bg-center bg-cover duration-500 brightness-[0.65] absolute'></div>
                
                {/* Left Arrow */}
                <div className='z-10 absolute top-[58%] md:top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                    onClick={prevSlide}>
                    <BsChevronCompactLeft size={40}/>
                </div>

                {/* Right Arrow */}
                <div className='z-10 absolute top-[58%] md:top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                    onClick={nextSlide}>
                    <BsChevronCompactRight size={40}/>
                </div>

                { (currentIndex === 0) &&
                <div className='max-w-[750px] mt-[3%] flex flex-col items-center absolute text-white'>
                    <p className='text-center text-6xl md:text-8xl font-semibold'>PT. Trisi Energi Indonesia</p>
                    <br></br>
                    {lang? <p className='text-center text-md md:text-2xl'>Mechanical, Electrical, and Construction Engineering Company</p>:
                    <p className='text-center text-md md:text-2xl'>Perusahaan Teknik Mekanikal, Elektrikal, dan Konstruksi</p>}
                    <br></br>
                    {lang? <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Request a Consultation</button>:
                    <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Konsultasi Sekarang</button>}
                </div>}

                { (currentIndex === 1) &&
                <div className='max-w-[750px] mt-[3%] flex flex-col items-center absolute text-white duration-500'>
                    {lang? <p className='text-center text-6xl md:text-8xl font-semibold'>Engineering <br/> the Future</p>:
                    <p className='text-center text-6xl md:text-8xl font-semibold'>Merancang <br/> Masa Depan</p>}
                    <br></br>
                    {lang? <p className='text-center text-md md:text-2xl'>with Mechanical, Electrical, and Construction Expertise</p>:
                    <p className='text-center text-md md:text-2xl'>dengan Ahli Mekanikal, Elektrikal, dan Konstruksi</p>}
                    <br></br>
                    {lang? <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Request a Consultation</button>:
                    <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Konsultasi Sekarang</button>}
                </div>}
                

                { (currentIndex === 2) &&
                <div className='max-w-[650px] mt-[3%] flex flex-col items-center absolute text-white duration-500'>
                    {lang ?<p className='text-center text-6xl md:text-8xl font-semibold'>Driven by Quality</p>:
                    <p className='text-center text-6xl md:text-8xl font-semibold'>Mengutamakan Kualitas</p>}
                    <br></br>
                    <br></br>
                    {lang? <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Get In Touch</button>:
                    <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-10 py-3 rounded-md'>Hubungi Kami</button>}
                </div>}

            </div>

            {/* Selling Point */}
            <div className="SellingPointWrapper flex-wrap " >
                
                <div id="sp-1" className="SellingPoint h-[470px] rounded-md drop-shadow-xl bg-white pl-[50px] pt-[50px]" style={{ bottom: `${10/100 * scrollY}px` }}>
                    {!textVisible && <p className='TextAnimation1 max-w-[300px] text-3xl font-bold text-[#24407a]' >Mechanical Engineering Solutions</p>}
                    {!textVisible && <hr className=" TextAnimation2 mt-[15px] mb-[15px] w-64 h-1 my-8 bg-[#52A244] border-0 rounded"/>}
                    {(!textVisible && lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia excels in providing mechanical engineering solutions, including design, installation, and maintenance of mechanical systems. Their skilled team of engineers applies their expertise to develop efficient and reliable solutions for clients.</p>}
                    {(!textVisible && !lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia sangat unggul dalam menyediakan solusi teknik mesin, meliputi desain, instalasi, dan pemeliharaan sistem mekanik. Tim insinyur terampil mereka menerapkan keahlian mereka untuk mengembangkan solusi yang efisien dan dapat diandalkan bagi klien.</p>}
                </div>

                <div className="SellingPoint h-[470px] rounded-md drop-shadow-xl bg-white pl-[50px] pt-[50px]" style={{ bottom: `${10/100 * scrollY}px` }}>
                    {!textVisible && <p className='TextAnimation1 max-w-[300px] text-3xl font-bold text-[#24407a]' >Electrical Engineering Expertise</p>}
                    {!textVisible && <hr className="TextAnimation2 mt-[15px] mb-[15px] w-64 h-1 my-8 bg-[#52A244] border-0 rounded"/>}
                    {(!textVisible && lang) && <p className='TextAnimation3 max-w-[300px]'> With their innovative approach in the field of electrical engineering, Trisi Energi Indonesia offers various services related to electrical design, installation, and energy solutions. Their team always keeps up with the latest developments in the field, enabling them to provide cutting-edge electrical systems tailored to the clients' needs.</p>}
                    {(!textVisible && !lang) && <p className='TextAnimation3 max-w-[300px]'> Dengan pendekatan inovatif mereka dalam bidang rekayasa listrik, Trisi Energi Indonesia menawarkan berbagai layanan terkait desain listrik, instalasi, dan solusi energi. Tim mereka selalu mengikuti perkembangan terkini dalam bidang tersebut, memungkinkan mereka untuk menyediakan sistem listrik terdepan yang disesuaikan dengan kebutuhan klien.</p>}
                </div>

                <div className="SellingPoint h-[470px] rounded-md drop-shadow-xl bg-white pl-[50px] pt-[50px]" style={{ bottom: `${10/100 * scrollY}px` }}>
                    {!textVisible && <p className='TextAnimation1 max-w-[300px] text-3xl font-bold text-[#24407a]' >Construction Services</p>}
                    {!textVisible && <hr class="TextAnimation2 mt-[15px] mb-[15px] w-64 h-1 my-8 bg-[#52A244] border-0 rounded"/>}
                    {(!textVisible && lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia provides comprehensive construction management and project execution services. Their experienced team oversees every stage of the construction process, ensuring efficient planning, accurate budgeting, and timely execution. They manage all aspects, including procurement, scheduling, quality control, and coordination with contractors and subcontractors.</p>}
                    {(!textVisible && !lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia menyediakan layanan manajemen konstruksi dan pelaksanaan proyek yang komprehensif. Tim berpengalaman mereka mengawasi setiap tahap proses konstruksi, memastikan perencanaan yang efisien, penganggaran yang tepat, dan pelaksanaan yang tepat waktu. Mereka mengelola semua aspek, termasuk pengadaan, penjadwalan, pengendalian kualitas, dan koordinasi dengan kontraktor dan subkontraktor.</p>}
                </div>

                <div className="SellingPoint h-[470px] rounded-md drop-shadow-xl bg-white pl-[50px] pt-[50px]" style={{ bottom: `${10/100 * scrollY}px` }}>
                    {!textVisible && <p className='TextAnimation1 max-w-[300px] text-3xl font-bold text-[#24407a]' >Sustainable Solutions</p>}
                    {!textVisible &&  <hr class="TextAnimation2 mt-[15px] mb-[15px] w-64 h-1 my-8 bg-[#52A244] border-0 rounded"/>}
                    {(!textVisible && lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia is committed to integrating environmentally friendly practices and renewable energy sources in their services. They prioritize sustainability and collaborate with clients to reduce their environmental impact while maximizing energy efficiency.</p>}
                    {(!textVisible && !lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia berkomitmen untuk mengintegrasikan praktik ramah lingkungan dan sumber energi terbarukan dalam layanan mereka. Mereka mengutamakan keberlanjutan dan bekerja sama dengan klien untuk mengurangi dampak lingkungan mereka sambil memaksimalkan efisiensi energi.</p>}
                </div>

                <div className="SellingPoint  h-[470px] rounded-md drop-shadow-xl bg-white pl-[50px] pt-[50px]" style={{ bottom: `${10/100 * scrollY}px` }}>
                    {!textVisible &&  <p className='TextAnimation1 max-w-[300px] text-3xl font-bold text-[#24407a]' > Safety and Quality Assurance</p>}
                    {!textVisible &&  <hr class="TextAnimation2 mt-[15px] mb-[15px] w-64 h-1 my-8 bg-[#52A244] border-0 rounded"/>}
                    {(!textVisible && lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia places a strong emphasis on safety and quality assurance in all of their services. They adhere to strict safety standards and regulations to ensure the well-being of their team, clients, and the environment. Quality assurance measures are applied at every stage of their work, from design and construction to ongoing maintenance.</p>}
                    {(!textVisible && !lang) && <p className='TextAnimation3 max-w-[300px]'> Trisi Energi Indonesia memberikan penekanan yang kuat pada keamanan dan jaminan kualitas dalam semua layanan mereka. Mereka mematuhi standar keselamatan yang ketat dan regulasi untuk memastikan kesejahteraan tim mereka, klien, dan lingkungan. Tindakan jaminan kualitas diterapkan pada setiap tahap pekerjaan mereka, mulai dari desain dan konstruksi hingga pemeliharaan yang berkelanjutan.</p>}
                </div>

            </div>

            {/* Vendors */}
            <div className='flex flex-col justify-center items-center mt-[-30%] md:mt-0'>
                <p className='font-bold text-2xl mb-[20px] text-[#24407a]'> Trisi Energi Indonesia</p>
                {lang ? <p className='font-bold text-center text-3xl md:text-5xl'> Our Vendor Partners</p>:
                <p className='font-bold text-center text-3xl md:text-5xl'> Mitra Vendor Kami</p>}
                <img src={vendors} className='w-[75%] h-auto' alt='abb' />     
            </div>


            {/* Footer */}
            <div className=' relative flex flex-wrap flex-row justify-around w-[100%] h-[300px] items-center border-t-2 bg-[#24407a] text-white'>
                <div className='flex flex-col w-auto pl-[5%] pr-[5%]'>
                    {lang? <p className='text-2xl'>Are you ready to talk to us and see how we can help?</p>:
                    <p className='text-2xl'>Kami siap untuk berbicara dengan Anda!</p>}
                    <span><a className='font-semibold text-2xl'>teindonesia@yahoo.co.id</a></span>
                    <p className='text-lg'>021-4892014</p>
                </div>
                <div className='flex flex-col items-center md:items-left pl-[5%] pr-[5%]'> 
                    <p>PT. Trisi Energi Indonesia © 2023</p>
                    <br></br>
                    <p className='text-center'>Jalan Kayu Putih VII Blok A No.8 Pulogadung Jakarta Timur 13260</p>
                </div>
            </div>

        </div>
    )
}

export default Home