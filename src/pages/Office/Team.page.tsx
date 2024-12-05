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
import community8 from '../../assets/images/community/community8.png';

function Team() {
  // State to track the currently active department name
  const [currentDepartment, setCurrentDepartment] = useState('Department 1');

  // Carousel images and corresponding department names
  const departments = [
    { image: community5, name: 'Community Outreach' },
    { image: community1, name: 'Event Planning' },
    { image: community4, name: 'Volunteer Coordination' },
    { image: community2, name: 'Public Relations' },
    { image: community3, name: 'Fundraising' },
    { image: community6, name: 'Graphic Design' },
    { image: community8, name: 'Social Media Management' },
  ];

  return (
    <>
      <Banner title="Our Team" />
      <div className="min-h-screen mx-20 mt-24 flex flex-col gap-12">
        <div className="h-11/12 flex flex-col items-center gap-16 text-black">
          <img src={TeamBanner} alt="Team Image" className="h-auto justify-center md:w-auto rounded-lg shadow-md" />
          <h1 className="text-4xl">Our Team</h1>
        </div>

        <div className="flex flex-col gap-16">
          {/* senator */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex items-center justify-center">
              <img src={TeamHs} alt="Senator Medina Danish" className="h-auto md:w-auto rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col text-center items-center self-start text-black justify-center">
              <h1 className="text-2xl">
                Meet MEMSSA<br />Senator<br />Medina Danish
              </h1>
              <p className="mt-2">about.</p>
            </div>
          </div>

          {/* chiefs of staff */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex justify-center">
              <img src={ChiefsTeam} alt="Chiefs Image" className="h-auto md:w-auto rounded-lg shadow-md" />
            </div>
            <div className="flex flex-col text-center self-start text-black">
              <h1 className="text-2xl">
                Meet Our<br />Chiefs of Staff
              </h1>
              <p className="mt-2 text-black">about</p>
            </div>
          </div>
        </div>

        {/* departments */}
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-center text-4xl">OUR DEPARTMENTS!</h1>
          <h2 className="text-center">{currentDepartment}</h2>
        </div>

        {/* Carousel Section */}
        <div className="relative mx-auto w-full mb-7 md:w-auto rounded-lg shadow-md">
          <Carousel
            showThumbs={false}
            autoPlay
            interval={3500}
            infiniteLoop
            onChange={(index) => setCurrentDepartment(departments[index].name)}
          >
            {departments.map((dept, index) => (
              <div key={index}>
                <img src={dept.image} alt={dept.name} className="w-full h-auto max-h-[500px] object-cover md:w-auto rounded-lg shadow-md" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Team;
