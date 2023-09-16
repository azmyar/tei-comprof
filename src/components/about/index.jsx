import {useEffect, useState} from 'react'
import LogoWhite from '../../LogoWhite.png'
import Logo from '../../Logo.png'
import Homebg from '../../Homebg.png'

import LocationLogo from '../../LocationLogo.png'
import PhoneLogo from '../../PhoneLogo.png'
import EmailLogo from '../../EmailLogo.png'
import xIcon from '../../x.png'

import Placeholder1 from '../../Placeholders/Placeholder1.jpg'
import Placeholder2 from '../../Placeholders/Placeholder2.jpg'
import Placeholder3 from '../../Placeholders/Placeholder3.jpg'

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

    // Carousel

    const slides = [
        Placeholder1,
        Placeholder2,
        Placeholder3
    ]

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

    // Show Images

    const [imgShow, imgSwitch] = useState(false);
    const [content, contentSwitcher] = useState(slides[0]);

    const showImages = (img) => {
        contentSwitcher(img)
        imgSwitch(true)
    }

    return(
        <div>

        {imgShow && 
            <div className='fixed flex flex-col items-center justify-center w-[100%] h-[100%] z-30' style={{backgroundImage:`url(${Homebg})`}}>
                <img src={content} className='w-[70%]'></img>
                <br></br>
                <img src={xIcon} className='w-[50px] cursor-pointer' onClick={() => imgSwitch(false)}></img>
            </div>
        }
        
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
            <div className='flex items-center justify-left max-w-auto h-[750px] w-full m-auto relative'>

                <div style={{backgroundImage: `url(${slides[2]})`}} className='w-full h-full bg-center bg-cover duration-500 brightness-[0.65] absolute'></div>
                <div className='max-w-[750px] mt-[3%] flex flex-col items-left absolute text-white ml-[10%] mr-[10%]'>
                    {lang? <p className='text-left text-7xl font-semibold'>Ignited by Passion, Crafted with Ingenuity</p>:
                    <p className='text-left text-7xl font-semibold'>Dipicu oleh Semangat, Dibentuk oleh Kreativitas</p>}
                    <br></br>
                    {lang? <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-15 py-3 rounded-md w-[60%] md:w-[30%]'>Request a Consultation</button>:
                    <button onClick={() => window.location = "/tei-comprof/contact"} 
                    className='button text-center text-md font-semibold px-15 py-3 rounded-md w-[60%] md:w-[30%]'>Konsultasi Sekarang</button>}
                </div>
            </div>

            <div className='flex flex-row items-center justify-left w-[100%] h-auto m-auto relative mt-[50px] mb-[50px]'>

            <div style={{backgroundImage: `url(${slides[1]})`}} className='hidden xl:block ml-[50px] min-w-[600px] min-h-[600px] bg-center bg-cover duration-500 brightness-[0.8] relative'></div>
                <div className='ml-[5%] mr-[5%] h-fit '>
                    {lang? <p className='text-8xl font-semibold text-[#24407a]'>Vision</p>:
                    <p className='text-8xl font-semibold text-[#24407a]'>Visi</p>}
                    <br></br>
                    {lang? <p className='text-2xl font-semibold '> Serving and Delivering New Innovations to Consumers in the Fields of Electrical and Construction.</p>:
                    <p className='text-2xl font-semibold '> Melayani serta memberi inovasi-inovasi baru kepada konsumen dalam bidang kelistrikan dan konstruksi.</p>}
                    {lang? <p className='text-8xl font-semibold text-[#24407a] mt-[70px]'>Mission</p>:
                    <p className='text-8xl font-semibold text-[#24407a] mt-[70px]'>Misi</p>}
                    <br></br>
                    {lang? <p className='text-2xl font-semibold '>To become a motivated company dedicated to serving and satisfying customers, actively contributing to and supporting development in our respective business areas.</p>:
                    <p className='text-2xl font-semibold '>Menjadi perusahaan yang senantiasa termotivasi untuk melayani dan memuaskan konsumen dan turut berperan serta menunjang pembangunan dari sisi usaha yang kami bidangi.</p>}
                </div>
            </div>

            {/* Journey */}
            <div className='flex flex-col items-center relative mt-[100px]'>
                <p className='font-bold text-2xl mb-[20px] text-[#52A244]'> Trisi Energi Indonesia</p>
                {lang? <p className='font-bold text-5xl'> Our Journey</p>:
                <p className='font-bold text-5xl'> Perjalanan Kami </p>}
                <div className='vl h-[90%]'></div>

                <div className='relative w-[100%] flex flex-col items-center justify-end mt-[200px]'>

                    <div className=' w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>22</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Rabu</p>
                                <p className='text-white text-xl font-bold'>September 2021</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) UID Jawa Timur
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pengadaan Pekerjaan Pemeliharaan Gedung Rumdin Margerejo</p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>03</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Rabu</p>
                                <p className='text-white text-xl font-bold'>November 2021</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) UID Jawa Timur
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pengadaan Troli, Pompa, Plat Bordes, SLD GI, Loker Serta Pemasangan Exhaus Fan                      </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[300px] md:w-[400px] md:h-[250px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[33%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>16</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Selasa</p>
                                <p className='text-white text-xl font-bold'>November 2021</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) UID Jawa Timur
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pembangunan Shelter SPKLU                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px`}} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>18</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Kamis</p>
                                <p className='text-white text-xl font-bold'>November 2021</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) UID Jawa Timur
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                         Pengadaan Pekerjaan Pemeliharaan Pos Satpam.
                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>               

                    <div className='w-[320px] h-[330px] md:w-[400px] md:h-[310px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[27%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>12</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Selasa</p>
                                <p className='text-white text-xl font-bold'>April 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP2B Jateng & DIY                    </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Perbaikan Interior Ruang Dispacher UP2B Jateng & DIY                    </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[330px] md:w-[400px] md:h-[250px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[33%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>19</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Selasa</p>
                                <p className='text-white text-xl font-bold'>April 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP3 Malang                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pemeliharaan Rumah Dinas Malang                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[330px] md:w-[400px] md:h-[250px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[33%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>06</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Senin</p>
                                <p className='text-white text-xl font-bold'>Juni 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP3 Malang                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Perbaikan Fasad Gedung A Jateng & DIY                         </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[340px] md:w-[400px] md:h-[320px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[28%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>08</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Senin</p>
                                <p className='text-white text-xl font-bold'>Agustus 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP3 Surabaya Selatan                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pemeliharaan Plafon Rapuh Lt.2 Dan Penyemprotan Rayap PLN UP3 SBS                              </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>
                    
                    <div className='w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>15</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Senin</p>
                                <p className='text-white text-xl font-bold'>Agustus 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) Unit Induk Distribusi Jatim UP3 Pamekasan                   </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pembangunan Kantor Jaga Pasongsongan                                                     </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[300px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>30</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Selasa</p>
                                <p className='text-white text-xl font-bold'>Agustus 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP3 Gresi                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pekerjaan Penggantian Pagar Kantor PLN UP3 Gresik                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[300px] md:w-[400px] md:h-[250px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[33%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>20</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Selasa</p>
                                <p className='text-white text-xl font-bold'>September 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UID Jawa Timur                            </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pembuatan Ruang Human Capital                                         </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[300px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>22</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Kamis</p>
                                <p className='text-white text-xl font-bold'>September 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        Jawa Timur                                            </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Renovasi Rumah Dinas Margerejo 816 di UP3 Surabaya Utara                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[300px] md:w-[400px] md:h-[310px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' style={{ bottom: `${10/100 * scrollY}px` }} onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[28%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>23</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Jumat</p>
                                <p className='text-white text-xl font-bold'>September 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                        PT. PLN (Persero) UP2B Jateng & DIY                          </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pemasangan ACP Samping Gedung A UP2BJTD                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                </div>
                
            </div>

            {/* On Going */}
            <div className='flex flex-col items-center relative mt-[-100px] mb-[100px]'>
                <p className='font-bold text-2xl mb-[20px] text-[#52A244]'> Trisi Energi Indonesia</p>
                {!lang? <p className='font-bold text-5xl'> Projek Berlangsung</p>:
                <p className='font-bold text-5xl'> On Going Projects</p>}
                <div className='vl h-[90%]'></div>

                <div className='relative w-[100%] flex flex-col items-center justify-end mt-[50px]'>
                    <div className='w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] mr-0 lg:mr-[550px] cursor-pointer' onClick={() => showImages(slides[0])} >
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>14</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Senin</p>
                                <p className='text-white text-xl font-bold'>November 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) Unit Induk Distribusi Jatim UP3 Pamekasan
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                        Pembangunan Pelindung Plts Tonduk
                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>

                    <div className='w-[320px] h-[350px] md:w-[400px] md:h-[280px] rounded-md drop-shadow-xl bg-white relative mt-[50px] ml-0 lg:ml-[550px] cursor-pointer' onClick={() => showImages(slides[0])}>
                        <div className='w-[100%] h-[30%] bg-[#24407a] rounded-t-lg flex flex-row items-center pl-[20px]'>
                            <div className='flex flex-col items-center'>
                                <p className='text-white text-6xl font-bold'>26</p>
                            </div>
                            <div className='flex flex-col pl-[10px]'>
                                <p className='text-white text-xl font-bold'>Senin</p>
                                <p className='text-white text-xl font-bold'>Desember 2022</p>
                            </div>
                            
                        </div>
                        <p className='text-2xl font-medium pl-[20px] pt-[20px]'>
                            PT. PLN (Persero) Unit Induk Distribusi Jatim UP3 Pamekasan                        
                        </p>
                        <p className='text-xl pl-[20px] pt-[20px]'>
                            Revitalisasi Kantor ULP Waru
                        </p>
                        <p className='text-md font-md pl-[20px] pt-[20px] text-[#D5D5D5]'>
                         Sipil
                        </p>
                    </div>
                </div>
                
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
        

        </div>
    )
}

export default Home