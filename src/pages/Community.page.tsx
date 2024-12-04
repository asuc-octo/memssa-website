import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import community1 from '../assets/images/community/community1.jpg';
import community2 from '../assets/images/community/community2.jpg';
import community3 from '../assets/images/community/community3.jpg';
import community4 from '../assets/images/community/community4.jpg';
import community5 from '../assets/images/community/community5.png';
import community6 from '../assets/images/community/community7.jpg';
import community8 from '../assets/images/community/community8.png';
import afgan from '../assets/images/community/afgan.png';
import asu from '../assets/images/community/ASU.png';
// import amenianlogo from '../assets/community/amenianlogo.png';
// import bsa from '../assets/community/bsa.png';
// import bfp from '../assets/community/BFP.png';
// import bsphat from '../assets/community/bspat.png';
// import esa from '../assets/community/esa.png';
// import fam from '../assets/community/fam.png';
// import isc from '../assets/community/isc.png';

function CommunityPage() {
    return (
        <div className="bg-[#f8f1e7] mx-0 px-0 py-5 font-serif text-[#4d3c36]">
            <header>
                <h1 className="text-center text-4xl mb-5 text-[#8b5e3c]">MEMSSA Community</h1>
            </header>
            <div className="relative mx-auto w-[100%] mb-7">
                {/* Carousel */}
                <Carousel showThumbs={false} autoPlay interval={4000} infiniteLoop>
                    {[community5, community1, community4, community2, community3, community6, community8].map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Community Event ${index + 1}`} className="w-full h-auto max-h-[500px] object-cover" />
                        </div>
                    ))}
                </Carousel>
                {/* Gradient overlays */}
                {/* <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#f8f1e7] to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#f8f1e7] to-transparent"></div> */}
            </div>
            {/* RSO's */}
            <div className="px-10 py-5">
                <h2 className="text-3xl text-[#8b5e3c] mb-5 text-center">MEMSSA Voting RSOs</h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
                    {[{ logo: afgan, name: "Afghan Student Association", handle: "@calasa_", link: "https://instagram.com/calasa_" },
                      { logo: asu, name: "Arab Student Union", handle: "@arabstudentunion_cal", link: "https://instagram.com/arabstudentunion_cal" },
                      // Add more items here
                    ].map((rso, index) => (
                        <div key={index} className="bg-white border border-[#e0d6cc] rounded-lg p-5 text-center shadow-md">
                            <a href={rso.link} target="_blank" rel="noopener noreferrer">
                                <div className="bg-white h-24 w-24 mx-auto mb-3 flex items-center justify-center rounded-full">
                                    <img src={rso.logo} alt={rso.name} className="object-contain" />
                                </div>
                                <p className="text-[#4d3c36] text-lg"> {/* text-center */}
                                    <span className="italic">{rso.handle}</span> <br />{rso.name}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
                <h2 className="mt-10 text-3xl text-[#8b5e3c] mb-5 text-center">MEMSSA Non-Voting RSOs</h2>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
                    {[{ logo: afgan, name: "ex", handle: "ex", link: "" },
                      // Add more items here
                    ].map((rso, index) => (
                        <div key={index} className="bg-white border border-[#e0d6cc] rounded-lg p-5 text-center shadow-md">
                            <a href={rso.link} target="_blank" rel="noopener noreferrer">
                                <div className="bg-white h-24 w-24 mx-auto mb-3 flex items-center justify-center rounded-full">
                                    <img src={rso.logo} alt={rso.name} className="object-contain" />
                                </div>
                                <p className="text-[#4d3c36] text-lg"> {/* text-center */}
                                    <span className="italic">{rso.handle}</span> <br />{rso.name}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CommunityPage;
