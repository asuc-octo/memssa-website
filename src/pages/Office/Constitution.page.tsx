//import ConstitutionPDF from '../../assets/MEMSSA_Constitution.pdf'
import Banner from '../../components/Navigation/Banner'

function Constitution() {
  return (
      <>
        <Banner title="Our Constitution"/>
        <div className="min-h-[90vh] mx-20 mt-20 flex flex-col gap-10 [&>*:last-child]:mb-40">
          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vQ5KBAVBUqcuUn-iIGqXMS8p5T7EKCPCaNPgoLpiJ3pFHlMv_gbWJsec3QTKqXN2n3BOSb15c3YsKzK/pub?embedded=true"
              width="60%"
              height="900px"
              title="Past Bills"
              className="border-color border-8 bg-brown"
            />
          </div>
      </div>  
      </>
  );
}

export default Constitution