import ConstitutionPDF from '../../assets/MEMSSA_Constitution.pdf'
import Banner from '../../components/Navigation/Banner'

function Constitution() {
  return (
      <>
        <Banner title="Our Constitution"/>
        <div className="min-h-[90vh] mx-20 mt-20 flex flex-col items-center gap-10 [&>*:last-child]:mb-40">
          <div className="w-full flex justify-center">
            <iframe
              src={ConstitutionPDF}
              width="80%"
              height="900px"
              className="border-color border-8 bg-dark-red"
              title="Constitution"
            />
          </div>
        </div>  
      </>
  );
}

export default Constitution