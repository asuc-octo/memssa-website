import { useState } from 'react';
//import AboutUsImage from '../../assets/images/teambanner.png';
import TeamHs from '../../assets/images/teampageheadshot.jpeg';
//import ChiefsTeam from '../../assets/images/chiefsimg.jpg';
import TeamBanner from '../../assets/images/teambanner.png';
import Banner from '../../components/Navigation/Banner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import images for the carousel
import community1 from '../../assets/images/Teams/Legislative_Group_Pic.jpg';
import community2 from '../../assets/images/Teams/Global Awareness.jpg';
import community3 from '../../assets/images/Teams/DEIJ_group_pic.jpg';
import community4 from '../../assets/images/Teams/SAO_group_pic.jpg';
import community5 from '../../assets/images/Teams/Marketing.jpg';
import community6 from '../../assets/images/Teams/Logistics.jpg';

// Import images for chiefs of staff
import Chief1Image from '../../assets/images/Teams/Cheif1Image.jpg'
import Chief2Image from '../../assets/images/Teams/Cheif2Image.jpg'
import Chief3Image from '../../assets/images/Teams/Cheif3Image.png'

function Team() {
    // Carousel images and corresponding department names
    const departments = [
        { image: community1, name: 'Legislative', description: 'Our Legislative team works on creating legislation that supports the needs of and promotes the wellbeing of student and community communities, especially those within the MEMSSA coalition. This department will be focusing on writing, but also staying in touch with the ASUC and its respective politics, to ensure that MEMSSA is taking adequate action in writing bills. This department will be working closely with DEIJ.' },
        { image: community2, name: 'Global Awareness', description: 'Our Global Awareness Department focuses on staying up to date on news and issues impacting our broad MEMSSA community, especially those issues impacting our MEMSSA minorities. Every meeting, we will be hearing from this department on a community news update on all MEMSSA (and relevant global) issues and will have more in-depth training on ongoing issues and events. They will cover MEMSSA news, history, reporting, and teaching our community’s issues at large!' },
        { image: community3, name: 'Diversity, Equity, Inclusion, Justice', description: 'Our Diversity, Equity, Inclusion, and Justice (DEIJ) will be our most proactive department yet, it’s brand new and ready to be launched! DEIJ is all about amplifying voices that are not typically heard. If you are interested in uplifting minorities within MEMSSA, consider applying to this department. DEIJ will be developing a new discrimination reporting system that will hold accountability, while also being of equitable and easy access to students. This department will also be required to stay in touch with the ASUC and the MEMSSA legislative department in order to be the most effective. Lastly, this department will be focusing on playing the role of an informant to other departments and the greater community about sensitive topics.' },
        { image: community4, name: 'Student Advocate and Organizing', description: 'Our Student Advocate and Organizing Department focuses on providing basic needs resources for all, but  will be an immediate, accessible resource to MEMSSA students and RSOs; this department’s job is to be “on the field,” as an on-call department that will assist in organizing protests, vigils, tabling, etcetera on campus.' },
        { image: community5, name: 'Marketing', description: 'Our Marketing Department is responsible for the maintenance and posting on all MEMSSA social media pages. Their duties involve creating content, scheduling posts, and monitoring the activity on social media. Furthermore, they are the governing figure for the committee’s creative vision and maximizing MEMSSA’s overall exposure on campus through marketing. This department will be managing social media, taking photos/videos, and creating graphics. Our most creative department!' },
        { image: community6, name: 'Logistical/Technical', description: 'Our Logistical/Technical helps to maintain the coherence of the internal MEMSSA office. The team will be focusing on scheduling and planning MEMSSA’s events, as well as working closely with our MEMSSA Community Department. Its ongoing projects include the MEMSSA Website and Notion.' },
    ];

    // State to track the currently active department name and description
    const [currentDepartment, setCurrentDepartment] = useState({ name: departments[0].name, description: departments[0].description });

    const handleChange = (index: number) => {
        setCurrentDepartment({
            name: departments[index].name, // Set the department name
            description: departments[index].description, // Set the department description
        });
    };

    return (
        <>
            <Banner title="Our Team" />
            <div className="min-h-screen mx-20 mt-10">
                <div className="h-11/12 flex flex-col items-center gap-16 text-black border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                    <img src={TeamBanner} alt="Team Image" className="h-auto justify-center md:w-auto rounded-large-custom shadow-md" />
                </div>

                <div className="flex flex-col gap-16 py-10">
                    {/* senator */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-24">
                        <div className="w-1/3 h-1/3 flex items-center justify-center border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                            <img src={TeamHs} alt="Senator Medina Danish" className="h-auto md:w-auto rounded-large-custom shadow-md" />
                        </div>
                        <div className="flex flex-col w-1/2 text-center items-center self-start text-black justify-center bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                            <h3 className="">
                                Senator Medina Danish
                            </h3>
                            <p className="mt-2">Medina Danish (she/her) is a junior majoring in Global Studies with a concentration in Peace & Conflict in the Middle East and minoring in Public Policy. She is passionate about MEMSSA issues and plans to work to combat them in her future career. As a member of the MEMSSA office for as long as she has been at Cal, she is beyond honored and excited about her term serving as the MEMSSA Community Senator.</p>
                        </div>
                    </div>

                    {/* chiefs of staff 
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex justify-center border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
              <img src={ChiefsTeam} alt="Chiefs Image" className="h-auto md:w-auto rounded-large-custom shadow-md" />
            </div>
            <div className="flex flex-col text-center self-start text-black">
              <h3 className="">
                Meet Our<br />Chiefs of Staff
              </h3>
              <p className="mt-2 text-black">about</p>
            </div>
          </div>
        </div> */}

                    <div className="flex flex-col w-full items-center justify-around text-center px-20 gap-y-8">
                        {/* Title */}

                        {/* Chief 1 */}
                        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-x-12 w-full mx-auto">
                            <div className="w-full md:w-1/3 flex justify-center">
                                {/* Image Card with Red Border */}
                                <div className="bg-dark-red rounded-tl-large-custom rounded-br-large-custom shadow-md p-2">
                                    <img
                                        src={Chief1Image}
                                        alt="Chief 1"
                                        className="h-auto w-full rounded-tl-large-custom rounded-br-large-custom"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex p-8 flex-col text-left md:text-left bg-brown border border-brown rounded-lg text-center shadow-md">
                                <h3 className="text-3xl">Chief of Staff Somer Alrai </h3>
                                <p className="mt-2 text-black text-center">
                                    Somer Alrai (she/her) is a sophomore majoring in Media Studies, Middle Eastern Languages and Cultures with a minor in Public Policy. She hopes to pursue a career in law and is committed to incorporating advocacy and justice into her future career. Having worked as the Student Organizing Director last year with the MEMSSA office, she is thrilled to contribute further to its mission and support the voices community as Chief of Staff this year.
                                </p>
                            </div>
                        </div>
                        {/* Chief 2 */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 w-full mx-auto">
                            <div className="w-full md:w-1/3 flex justify-center">
                                {/* Image Card with Red Border */}
                                <div className="bg-dark-red rounded-tl-large-custom rounded-br-large-custom shadow-md p-2">
                                    <img
                                        src={Chief2Image}
                                        alt="Chief 2"
                                        className="h-auto w-full rounded-tl-large-custom rounded-br-large-custom"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex p-20 flex-col text-center bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                                <h3 className="text-3xl">Chief of Staff Abdullah Memon</h3>
                                <p className="mt-2 text-black ">
                                    Abdullah Memon is currently a sophomore studying Politcal Economy and Middle Eastern Languages and culture, with a minor in Public Policy. He also serves as co-chief of staff for the MEMSSA office, focusing most of his time on external office tasks. He hopes to join the policy or law field after graduation and continue to advocate for disadvantaged communities as a life long mission.

                                </p>
                            </div>
                        </div>
                        {/* Chief 3 */}
                        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-x-12 w-full mx-auto">
                            <div className="w-full md:w-1/3 flex justify-center">
                                {/* Image Card with Red Border */}
                                <div className="bg-dark-red rounded-tl-large-custom rounded-br-large-custom shadow-md p-2">
                                    <img
                                        src={Chief3Image}
                                        alt="Chief 3"
                                        className="h-auto w-full rounded-tl-large-custom rounded-br-large-custom"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col p-20 text-left md:text-left bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                                <h3 className="text-3xl">Chief of Staff Jasleen Bal</h3>
                                <p className="mt-2 text-black text-center">
                                    Jasleen Bal (she/her) is a junior majoring in Public Health and Nutritional Sciences with a concentration in Physiology and Metabolism. She is passionate about Punjabi and Sikh issues and wants to build strong crosscultural connections within the MEMSSA community. She is super excited about being one of Senator Medina Danish’s Chiefs of Staff this year.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* departments */}
                <div className="">
                    <h3 className="text-center">Our Departments</h3>
                </div>

                {/* Carousel Section */}
                <div className="flex flex-col w-full items-center justify-around text-center px-10 gap-y-8 mb-10">
                    <div className="relative mx-auto w-full :w-auto shadow-md border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                        <Carousel
                            showThumbs={false}
                            autoPlay
                            interval={3500}
                            infiniteLoop
                            onChange={handleChange}
                        >
                            {departments.map((dept, index) => (
                                <div key={index}>
                                    <img src={dept.image} alt={dept.name} className="w-full h-auto max-h-[500px] object-cover md:w-auto rounded-large-custom shadow-md" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center bg-brown border border-brown rounded-lg text-center shadow-md p-8">
                        <h3 className="text-center">{currentDepartment.name}</h3>
                        <p className="text-center py-5 w-3/4">{currentDepartment.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
