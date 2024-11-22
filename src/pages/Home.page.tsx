import { FourToOneGrid } from '../assets/components/Layout/Columns.layout';
import { WidePageLayout } from '../assets/components/Layout/Page.layout'
import AboutUsImage from '../assets/images/AboutUsImage.jpg'
function Home() {
    return (
        // header here
        // page div
        <>
        <WidePageLayout>
            <section
              id='welcome-container'
              className='h-[30vh] relative top-0'
            >
            <h1 className="text-center font-bold text-black text-4xl">MEMSSA</h1>
            <h2 className="text-center font-light text-black text-2xl">middle east, muslim, sikh, south asian association</h2>
            </section>
            <section className="flex flex-row items-center my-4">
            <div className="w-1/2">
              <img src={AboutUsImage} alt="About Us" className="w-full h-auto" />
            </div>
            <div className="w-1/2 px-8">
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-lg mb-4">
              MEMSSA represents the University of California, Berkeley by advocating for an academic, administrative, and operates on grassroots levels. The team mission emphasizes the importance of mobilizing organizations that indicate their intent on serving and / or representing one or more of the following identities: Middle Eastern, Muslim, Sikh, or South Asian.
              </p>
                <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => window.location.href = '/office/pastbills'}
                >
                Link to Constitution Bills
                </button>
            </div>
            </section>
        </WidePageLayout>
        {/*<section className="bg-red-500 text-white text-center py-4 w-full">
          <h1 className="text-xl font-bold">Our next event is in ?? days</h1>
        </section>*/}
        <WidePageLayout>
          <FourToOneGrid>
            <button className="bg-blue-500 text-white py-4 px-6 rounded-lg text-lg font-bold">
              Join Our Office
            </button>
            <button className="bg-blue-500 text-white py-4 px-6 rounded-lg text-lg font-bold">
              Join Our Mailing List
            </button>
            <button
              className="bg-blue-500 text-white py-4 px-6 rounded-lg text-lg font-bold"
              onClick={() => window.location.href = '/calendar'}
            >
              Calendar
            </button>
            <button className="bg-blue-500 text-white py-4 px-6 rounded-lg text-lg font-bold">
              Anonymous Suggestions
            </button>
          </FourToOneGrid>
        </WidePageLayout>
        </>
        
    );
}

export default Home