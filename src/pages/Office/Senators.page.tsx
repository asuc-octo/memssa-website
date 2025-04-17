import { useState } from 'react';
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

        // State to track the currently active department name and description
    const [currentSenator, setCurrentSenator] = useState({ name: senators[0].name, description: senators[0].description });

    const handleChange = (index: number) => {
        setCurrentSenator({
            name: senators[index].name, // Set the department name
            description: senators[index].description, // Set the department description
        });
    };
    return (
        <>
        <Banner title="Our Senators" />
        <div className="bg-[#f8f1e7] mx-0 px-0 py-5 font-serif text-[#4d3c36]">
        <div className="flex flex-col w-auto h-auto items-center justify-around text-center px-10 gap-y-8 mb-10">
                    <div className="relative mx-auto w-auto h-auto shadow-md rounded-tl-large-custom rounded-br-large-custom">
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            interval={3500}
                            infiniteLoop
                            onChange={handleChange}
                        >
                            {senators.map((sen, index) => (
                                <div key={index}>
                                    <img src={sen.image} alt={sen.name} className="w-auto h-auto max-h-[700px] object-contain md:w-auto shadow-md p-5" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center text-center bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                        <h3 className="text-center">{currentSenator.name}</h3>
                        <p className="text-center py-5 w-3/4">{currentSenator.description}</p>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Senators;