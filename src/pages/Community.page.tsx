import Banner from '../components/Navigation/Banner'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import community1 from '../assets/images/community/community1.jpg';
import community2 from '../assets/images/community/community2.jpg';
import community3 from '../assets/images/community/community3.jpg';
import community4 from '../assets/images/community/community4.jpg';
import community5 from '../assets/images/community/community5.png';
import community6 from '../assets/images/community/community7.jpg';
import community8 from '../assets/images/community/community8.png';
import afgan from '../assets/images/community/RSO Icons/afgan.png';
import asu from '../assets/images/community/RSO Icons/ASU.png';
import amenianlogo from '../assets/images/community/RSO Icons/amenianlogo.png';
import bsa from '../assets/images/community/RSO Icons/bsa.png';
import bfp from '../assets/images/community/RSO Icons/BFP.png';
import bsphat from '../assets/images/community/RSO Icons/bspat.png';
import esa from '../assets/images/community/RSO Icons/esa.png';
import fam from '../assets/images/community/RSO Icons/fam.png';
import isc from '../assets/images/community/RSO Icons/isc.png';
import jm from '../assets/images/community/RSO Icons/jm.png';
import menarrc from '../assets/images/community/RSO Icons/menarrc.png';
import msa from '../assets/images/community/RSO Icons/msa.png';
import psa from '../assets/images/community/RSO Icons/psa.png';
import ssa from '../assets/images/community/RSO Icons/ssa.png';
import ysa from '../assets/images/community/RSO Icons/ysa.png';
import isa from '../assets/images/community/RSO Icons/isa.png';
import saab from '../assets/images/community/RSO Icons/saab.png';
import amsu from '../assets/images/community/RSO Icons/amsu.png';
import mch from '../assets/images/community/RSO Icons/mch.png';
import mtc from '../assets/images/community/RSO Icons/mtc.png';
import absa from '../assets/images/community/RSO Icons/absa.png';
import pph from '../assets/images/community/RSO Icons/pph.png';
import threads from '../assets/images/community/RSO Icons/threads.png';
import pac from '../assets/images/community/RSO Icons/pac.png';
import ampd from '../assets/images/community/RSO Icons/ampd.png';




function CommunityPage() {
    return (
        <>
        <Banner title="Community"/>
        <div className="bg-[#f8f1e7] mx-0 px-0 py-5 font-serif text-[#4d3c36]">
            <div className="relative mx-auto w-[90%] mb-7 border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                {/* Carousel */}
                <Carousel showThumbs={false} autoPlay interval={4000} infiniteLoop>
                    {[community5, community1, community4, community2, community3, community6, community8].map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Community Event ${index + 1}`} className="w-full h-auto max-h-[500px] object-cover rounded-large-custom" />
                        </div>
                    ))}
                </Carousel>
                {/* Gradient overlays */}
                {/* <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#f8f1e7] to-transparent"></div>
                <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#f8f1e7] to-transparent"></div> */}
            </div>
            {/* RSO's */}
            <div className="px-10 py-5">
                <h3 className="mb-5 text-center">MEMSSA Voting RSOs</h3>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
                    {[{ logo: afgan, name: "Afghan Student Association", handle: "@calasa_", link: "https://instagram.com/calasa_" },
                      { logo: asu, name: "Arab Student Union", handle: "@arabstudentunion_cal", link: "https://instagram.com/arabstudentunion_cal" },
                      { logo: amenianlogo, name: "Armenian Student Association", handle: "@cal_asa", link: "https://instagram.com/cal_asa" },
                      { logo: bsa, name: "Bengali Student Association", handle: "@bsaberkeley", link: "https://instagram.com/bsaberkeley" },
                      { logo: bsphat, name: "Bhagat Puran Singh Health Initiative", handle: "@berkeleybpshi", link: "https://instagram.com/berkeleybpshi" },
                      { logo: esa, name: "Egyptian Student Association", handle: "@esaberkeley", link: "https://instagram.com/esaberkeley" },
                      { logo: fam, name: "Faces of African American Muslims", handle: "@ucb.fam", link: "https://instagram.com/ucb.fam" },
                      { logo: isc, name: "Iranian Students� Cultural Organization", handle: "@iscoucb", link: "https://instagram.com/iscoucb" },
                      { logo: jm, name: "Jakara Movement Chapter at UC Berkeley", handle: "@jakaramovement", link: "https://instagram.com/jakaramovement" },
                      { logo: menarrc, name: "Middle Eastern - North African Recruitment & Retention Center (MENARRC)", handle: "@calmenarrc", link: "https://instagram.com/calmenarrc" },
                      { logo: msa, name: "Muslim Student Association", handle: "@calmsa", link: "https://instagram.com/calmsa" },
                      { logo: psa, name: "Pakistani Student Association", handle: "@psaucberkeley", link: "https://instagram.com/psaucberkeley" },
                      { logo: ssa, name: "Sikh Student Association", handle: "@ucbssa", link: "https://instagram.com/ucbssa" },
                      { logo: ysa, name: "Yemeni Student Association", handle: "@cal.ysa", link: "https://instagram.com/cal.ysa" },
                      { logo: isa, name: "Iraqi Student Association", handle: "@isu.california", link: "https://instagram.com/isu.california" },
                      { logo: saab, name: "Saudi Arabian Student Association", handle: "@berkeley.saab", link: "https://instagram.com/berkeley.saab" },
                      { logo: amsu, name: "African Maghreb Student Union", handle: "@amsu_cal", link: "https://instagram.com/amsu_cal" },
                      { logo: bfp, name: "Bears For Palestine", handle: "@bearsforpalestine", link: "https://instagram.com/bearsforpalestine" },
                      
                      // Add more items here
                    ].map((rso, index) => (
                        <div key={index} className="bg-brown border border-brown rounded-lg p-5 text-center shadow-md">
                            <a href={rso.link} target="_blank" rel="noopener noreferrer">
                                <div className="bg-brown h-24 w-24 mx-auto mb-3 flex items-center justify-center rounded-full">
                                    <img src={rso.logo} alt={rso.name} className="object-contain" />
                                </div>
                                <p className="text-[#4d3c36] text-lg"> {/* text-center */}
                                    <span className="italic">{rso.handle}</span> <br />{rso.name}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
                <h3 className="mt-10 mb-5 text-center">MEMSSA Non-Voting RSOs</h3>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-5">
                        {[{ logo: mtc, name: "Muslim Tech Collaborative (MTC)", handle: "@mtcberkeley", link: "https://instagram.com/mtcberkeley" },
                          { logo: mch, name: "Muslims of Haas", handle: "@muslimsofhaas", link: "https://instagram.com/muslimsofhaas" },
                          { logo: absa, name: "Ahlul Bayt Student Association", handle: "@absaberkeley", link: "https://instagram.com/absaberkeley" },
                          { logo: threads, name: "Threads Magazine", handle: "@threadsatcal", link: "https://instagram.com/threadsatcal" },
                          { logo: pph, name: "Palestinian Public Health", handle: "@ucb_pph", link: "https://instagram.com/ucb_pph" },
                          { logo: ampd, name: "AMPD", handle: "@calampd", link: "https://instagram.com/calampd" },
                          { logo: pac, name: "Punjabi Art Collective", handle: "@punjabiartcollective", link: "https://instagram.com/punjabiartcollective" }
                      // Add more items here
                    ].map((rso, index) => (
                        <div key={index} className="bg-brown border border-brown rounded-lg p-5 text-center shadow-md">
                            <a href={rso.link} target="_blank" rel="noopener noreferrer">
                                <div className="bg-brown h-24 w-24 mx-auto mb-3 flex items-center justify-center rounded-full">
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
        </>
    );
}

export default CommunityPage;
