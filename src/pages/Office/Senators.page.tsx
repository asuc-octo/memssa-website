import { useState } from 'react';
import Banner from '../../components/Navigation/Banner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TeamHs from '../../assets/images/teampageheadshot.jpeg';

function Senators() {
    const senators = [
        { image: TeamHs, name: 'Medina Danish', description: '2024 - 2025' },
        { image: TeamHs, name: 'Sama Zazai', description: '2023 - 2024' },
        { image: TeamHs, name: 'Deena Ali', description: '2022 - 2023' },
        { image: TeamHs, name: 'Mehnaz Grewal', description: '2021 - 2022' },
        { image: TeamHs, name: 'Aasim Yahya', description: '2020 - 2021' },
        { image: TeamHs, name: 'Sumrit Grewal', description: '2019 - 2020' },
        { image: TeamHs, name: 'Imran Khan', description: '2018 - 2019' },
        { image: TeamHs, name: 'Nuha Khalfay', description: '2017 - 2018' },
        { image: TeamHs, name: 'Alaa Aissi', description: '2016 - 2017' },
        { image: TeamHs, name: 'Sumayyah Din', description: '2015 - 2016' },
        { image: TeamHs, name: 'Naira Shirinian', description: '2011 - 2012' },
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
        <div className="flex flex-col w-full items-center justify-around text-center px-10 gap-y-8 mb-10">
                    <div className="relative mx-auto w-[60%] h-[100%] shadow-md border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            interval={3500}
                            infiniteLoop
                            onChange={handleChange}
                        >
                            {senators.map((sen, index) => (
                                <div key={index}>
                                    <img src={sen.image} alt={sen.name} className="w-full h-auto max-h-[500px] object-cover md:w-auto rounded-large-custom shadow-md" />
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