import AboutUsImage from '../../assets/images/AboutUsImage.jpg'
import TeamHs from '../../assets/images/teampageheadshot.jpeg'
import ChiefsTeam from '../../assets/images/chiefsimg.jpg'


function Team() {
  return (
        // header here
        // page div
    <>
      <div className="min-h-screen mx-20 mt-24 flex flex-col gap-12">
        <div className="h-11/12 flex flex-col items-center gap-16 text-black">
        <img src={AboutUsImage} alt="Team Image" className="h-auto justify-center" />
          <h1 className="text-4xl">Our Team</h1>
        </div>

        <div className="flex flex-col gap-16">
          {/* senator */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex items-center justify-center">
            <img src={TeamHs} alt="Senator Medina Danish" className="h-auto" />
            </div>
            <div className="flex flex-col text-center items-center self-start text-black justify-center">
              <h1 className="text-2xl">
                Meet MEMSSA<br/>Senator<br/>Medina Danish
              </h1>
              <p className="mt-2">about.</p>
            </div>
          </div>

          {/* chiefs of staff */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-52">
            <div className="w-1/3 h-1/3 flex justify-center">
            <img src={ChiefsTeam} alt="Chiefs Image" className="h-auto" />
            </div>
            <div className="flex flex-col text-center self-start text-black" >
              <h1 className="text-2xl">
                Meet Our<br/>Chiefs of Staff
              </h1>
              <p className="mt-2 text-black">about</p>
            </div>
          </div>
        </div>
        {/* departments */}
        <div className="flex flex-col gap-4 fonr text-black">
          <h1 className="text-center">OUR DEPARTMENTS!</h1>
          <h2 className="text-center">Department Name</h2>
          <img src={AboutUsImage} alt="Team Image" className="h-auto" />
        </div>
      </div>
    </>
  );
}

export default Team;
