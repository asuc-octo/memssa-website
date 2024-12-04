import { FourToOneGrid } from '../components/components/Layout/Columns.layout';
import { WidePageLayout } from '../components/components/Layout/Page.layout'
import AboutUsImage from '../assets/images/AboutUsImage.jpg'
import Banner from '../components/Navigation/Banner'

function Home() {
    return (
        <>
          <Banner title="MEMSSA"/>
          <WidePageLayout>
              <section className="flex flex-row items-center my-4">
              <div className="w-1/2 border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                <img src={AboutUsImage} alt="About Us" className="rounded-large-custom"/>
              </div>
              <div className="w-1/2 px-8 flex flex-col items-center">
                <h3>About Us</h3>
                <p className="text-lg mb-4">
                MEMSSA represents the University of California, Berkeley by advocating for an academic, administrative, and operates on grassroots levels. The team mission emphasizes the importance of mobilizing organizations that indicate their intent on serving and / or representing one or more of the following identities: Middle Eastern, Muslim, Sikh, or South Asian.
                </p>
                  <button
                  className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple"
                  onClick={() => window.location.href = '/office/pastbills'}
                  >
                  Link to Constitution Bills
                  </button>
              </div>
              </section>
            <FourToOneGrid>
              <button className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple">
                Join Our Office
              </button>
              <button className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple">
                Join Our Mailing List
              </button>
              <button
                className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple"
                onClick={() => window.location.href = '/calendar'}
              >
                Calendar
              </button>
              <button className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple">
                Anonymous Suggestions
              </button>
            </FourToOneGrid>
          </WidePageLayout>
        </>
    );
}

export default Home