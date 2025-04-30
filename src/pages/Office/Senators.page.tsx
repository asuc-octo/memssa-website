import Banner from '../../components/Navigation/Banner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TeamHs from '../../assets/images/teampageheadshot.jpeg';
import samazazai from '../../assets/images/senators/samazazai.png';
import deenaali from '../../assets/images/senators/deenaali.png';
import mehnazgrewal from '../../assets/images/senators/mehnazgrewal.png';
import aasim from '../../assets/images/senators/aasimyahya.png';
import sumrit from '../../assets/images/senators/sumritgrewal.png';
import imran from '../../assets/images/senators/imrankhan.png';
import nuha from '../../assets/images/senators/nuhakhalfay.png';
import alaa from '../../assets/images/senators/alaaaissi.png';
import sumayyah from '../../assets/images/senators/sumayyah.png';
import sadia from '../../assets/images/senators/sadia.png';
import naira from '../../assets/images/senators/nairi.png';
import {useState} from 'react';

import resData from '../../assets/ASUC_resolutions_by_senator.json';



function Senators() {
    const senators = [
        { image: TeamHs, name: 'Medina Danish', description: '2024 - 2025' },
        { image: samazazai, name: 'Sama Zazai', description: '2023 - 2024' },
        { image: deenaali, name: 'Deena Ali', description: '2022 - 2023' },
        { image: mehnazgrewal, name: 'Mehnaz Grewal', description: '2021 - 2022' },
        { image: aasim, name: 'Aasim Yahya', description: '2020 - 2021' },
        { image: sumrit, name: 'Sumrit Grewal', description: '2019 - 2020' },
        { image: imran, name: 'Imran Khan', description: '2018 - 2019' },
        { image: nuha, name: 'Nuha Khalfay', description: '2017 - 2018' },
        { image: alaa, name: 'Alaa Aissi', description: '2016 - 2017' },
        { image: sumayyah, name: 'Sumayyah Din', description: '2015 - 2016' },
        { image: sadia, name: 'Sadia Saifuddin', description: '2012 - 2013' },
        { image: naira, name: 'Naira Shirinian', description: '2011 - 2012' },
    ]

    const senatorsWithResolutions = senators.map((senator) => ({
        ...senator, // Spread the existing senator properties
        resolutions: resData.filter((res) =>
            res['Primary Sponsor'].includes(senator.name) // Filter resolutions for this senator
        ),
    }));

    const [activeIndex, setActiveIndex] = useState(0);
    const currentSenator = senatorsWithResolutions[activeIndex]; // Get the current senator based on the active index

    const handleChange = (index: number) => {
        setActiveIndex(index); // Update the active index
        
        
    };

    return (
        <>
        <Banner title="Our Senators" />
            <div className="min-h-screen mx-20 mt-10 font-serif text-[#4d3c36]">
                <div className="flex flex-col mx-auto w-full h-auto items-center justify-center gap-24 mt-10"> 
                    <div className = "flex flex-col items-center justify-center w-full h-auto rounded-tl-large-custom rounded-br-large-custom shadow-md p-2">
                    <Carousel
                        showThumbs={false}
                        showIndicators={false}
                        showArrows={true}
                        autoPlay={false}
                        infiniteLoop={true}
                        onChange={handleChange}
                        selectedItem={activeIndex}
                    >
                    
                    {senators.map((sen, index) => (
                            <div key={index} > 
                                <img src={sen.image} alt={sen.name} className="w-auto h-auto object-center max-h-[500px] object-contain md:w-auto p-5" />
                            </div>
                            ))}
                    </Carousel>
                    </div>
                               
                    <div className="w-full h-auto flex flex-col items-center justify-center text-center bg-brown border border-brown border-box rounded-lg text-center shadow-md mb-24 p-10">
                                    
                        <h3 className="text-center">{currentSenator.name}</h3>
                        <p className="text-center py-5 w-3/4">{currentSenator.description}</p>
                                    
                        {/* Conditional Rendering */}
                        {currentSenator.resolutions.length !== 0 && (
                            <>
                                <h4 className="font-noto-sans font-bold text-center text-subheader text-3xl py-5">Past Resolutions:</h4>
                                <p className="text-center py-5 w-3/4">
                                    Click on the bill name to view the full resolution.
                                </p>
                            </>
                        )}
                        <div className="w-full flex flex-col items-center justify-center text-center bg-brown border border-brown rounded-lg text-center shadow-md max-h-[300px] overflow-y-auto">
                            <ol className="list-decimal list-inside text-center w-[60%]">
                                {currentSenator.resolutions.map((res, _) => (
                                                
                                <li key={res['Bill Name']} className="text-center py-5 w-full relative group">
                                    <a href={res['Bill Link']} target="_blank" rel="noopener noreferrer" className = "underline">{res['Bill Name']}</a>
                                    {/* Hover Box */}
                                    <div className="absolute inset-0 bg-light-brown bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={res['Bill Link']} target="_blank" rel="noopener noreferrer" className="text-center py-5">Date Introduced: {res['Date Introduced']} - {res['Final Status']} - Date of Final Action: {res['Date of Final Action']}</a>
                                    </div>
                                </li>
                                    
                                ))}
                            </ol>
                        </div>

                    </div>
                   
                </div>   
            </div>
        
        </>
    );
}

export default Senators;

{/*
<div className="flex flex-row h-auto items-center justify-around text-center px-10 gap-y-8 mb-10">
                                
                                <div key={index} className='w-1/2'>
                                    <img src={sen.image} alt={sen.name} className="w-1/2 h-auto max-h-[500px] object-contain md:w-auto shadow-md p-5" />
                                </div>
                            
                    
                                <div ref = {scrollRef} className="w-full max-h-[500px] flex flex-col items-center justify-center text-center bg-brown border border-brown rounded-lg text-center shadow-md p-8 overflow-y-auto">
                                    
                                    <h3 className="text-center">{currentSenator.name}</h3>
                                    <p className="text-center py-5 w-3/4">{currentSenator.description}</p>
                                    
                                    
                                    
                                    {filteredResolutions.length !== 0 && (
                                        <>
                                        <h4 className="font-noto-sans font-bold text-center text-subheader text-3xl py-5">Past Resolutions:</h4>
                                        <p className="text-center py-5 w-3/4">
                                            Click on the bill name to view the full resolution.
                                        </p>
                                        </>
                                    )}
                                    <div className="w-full flex flex-col items-center justify-center text-center bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                                        <ol className="list-decimal list-inside text-center space-y-5 w-[60%]">
                                            {filteredResolutions.map((res, _) => (
                                                
                                                    <li key={res['Bill Name']} className="text-center py-5 w-full relative group">
                                                    <a href={res['Bill Link']} target="_blank" rel="noopener noreferrer" className = "underline">
                                                    {res['Bill Name']}
                                                    </a>
                                                    
                                                    <div className="absolute inset-0 bg-[#f8f1e7] bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <a href={res['Bill Link']} target="_blank" rel="noopener noreferrer" className="text-center py-5">Date Introduced: {res['Date Introduced']} - {res['Final Status']} - Date of Final Action: {res['Date of Final Action']}</a>
                                                    </div>
                                                    </li>
                                    
                                                ))}
                                        </ol>
                                    </div>

                                
                            </div>
                            </div>
                        ))}
                    </Carousel>
                    
            </div>
        
        </>
    );
}

export default Senators; */}