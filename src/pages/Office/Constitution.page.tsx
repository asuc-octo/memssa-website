import ConstitutionPDF from '../../assets/MEMSSA_Constitution.pdf'

function Constitution() {
  return (
      // header here
      // page div
      <>
        <div className="min-h-[90vh] mx-20 mt-48 flex flex-col gap-10 [&>*:last-child]:mb-40">
          <header className="w-ful text-center">
            <h1 className="text-red-50">Our Constitution</h1>
          </header>
          <div className="w-full flex justify-center">
            <iframe
              src={ConstitutionPDF}
              width="80%"
              height="900px"
              className="border-black rounded-md"
              title="Constitution"
            />
          </div>
        </div>  
      </>
  );
}

export default Constitution