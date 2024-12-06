import React, { useState } from 'react';
import AboutUsImage from '../../assets/images/teambanner.png';
import TeamHs from '../../assets/images/teampageheadshot.jpeg';
import ChiefsTeam from '../../assets/images/chiefsimg.jpg';
import TeamBanner from '../../assets/images/teambanner.png';
import Banner from '../../components/Navigation/Banner';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import images for the carousel
import community1 from '../../assets/images/community/community1.jpg';
import community2 from '../../assets/images/community/community2.jpg';
import community3 from '../../assets/images/community/community3.jpg';
import community4 from '../../assets/images/community/community4.jpg';
import community5 from '../../assets/images/community/community5.png';
import community6 from '../../assets/images/community/community6.jpg';

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
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex items-center justify-center border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
              <img src={TeamHs} alt="Senator Medina Danish" className="h-auto md:w-auto rounded-large-custom shadow-md" />
            </div>
            <div className="flex flex-col w-1/3 text-center items-center self-start text-black justify-center">
              <h3 className="">
                Meet MEMSSA Senator Medina Danish
              </h3>
              <p className="mt-2">Medina Danish (she/her) is a junior majoring in Global Studies with a concentration in Peace & Conflict in the Middle East and minoring in Public Policy. She is passionate about MEMSSA issues and plans to work to combat them in her future career. As a member of the MEMSSA office for as long as she has been at Cal, she is beyond honored and excited about her term serving as the MEMSSA Community Senator.</p>
            </div>
          </div>

          {/* chiefs of staff */}
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
        </div>

        {/* departments */}
        <div className="">
          <h3 className="text-center">Our Departments</h3>
        </div>

        {/* Carousel Section */}
        <div className="relative mx-auto w-full md:w-auto shadow-md border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
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
        <h3 className="text-center">{currentDepartment.name}</h3>
        <p className="text-center py-5">{currentDepartment.description}</p>
      </div>
    </>
  );
}

export default Team;
