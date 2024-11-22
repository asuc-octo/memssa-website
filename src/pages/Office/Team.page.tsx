function Team() {
  return (
    <>
      <div className="min-h-screen mx-20 mt-24 flex flex-col gap-12">
        {/* image */}
        <div className="flex flex-col items-center gap-16">
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
          </div>
          <h1 className="text-4xl">Our Team</h1>
        </div>

        <div className="flex flex-col gap-16">
          {/* senator */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            <div className="w-80 h-80 bg-gray-200 flex items-center justify-center">
              {/* image */}
            </div>
            <div className="flex flex-col text-center items-center self-start">
              <h1 className="text-2xl font-bold">
                Meet MEMSSA<br/>Senator<br/>Medina Danish
              </h1>
              <p className="mt-2">about.</p>
            </div>
          </div>

          {/* chiefs of staff */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-52">
            <div className="w-80 h-80 bg-gray-200 flex justify-center">
              {/* image */}
            </div>
            <div className="flex flex-col text-center self-start">
              <h1 className="text-2xl">
                Meet Our<br/>Chiefs of Staff
              </h1>
              <p className="mt-2">about</p>
            </div>
          </div>
        </div>
        {/* departments */}
        <div className="flex flex-col gap-4">
          <h1 className="text-center">OUR DEPARTMENTS!</h1>
          <h2 className="text-center">Department Name</h2>
          <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
            {/* uhh idk how to do the arrows */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
