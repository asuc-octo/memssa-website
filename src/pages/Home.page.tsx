import { FourToOneGrid } from '../components/components/Layout/Columns.layout';
import { WidePageLayout } from '../components/components/Layout/Page.layout'
import AboutUsImage from '../assets/images/AboutUsImage.jpg'
import HomeButtonBackgroundImage from '../assets/images/homeButtonBackground.jpg'
import Banner from '../components/Navigation/Banner'

function BackgroundImage() {
  return (
    <div className="relative w-full h-full">
      <img
        src={HomeButtonBackgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}

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
                <div className="relative w-full h-64">
                  <BackgroundImage/>
                  <button className="bg-light-brown text-dark-red py-2 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold w-3/4">
                    Join Our Office
                  </button>
                </div>

                <div className="relative w-full h-64">
                  <BackgroundImage/>
                  <button className="bg-light-brown text-dark-red py-2 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold w-3/4"
                  onClick={() => (window.location.href = 'https://forms.gle/8NjJkvUQoWyf5ztm7')}
                  >
                    Join Our Mailing List
                  </button>
                </div>

                <div className="relative w-full h-64">
                  <BackgroundImage/>
                  <button className="bg-light-brown text-dark-red py-2 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold w-3/4">
                    Anonymous Suggestions
                  </button>
                </div>

                <div className="relative w-full h-64">
                  <BackgroundImage/>
                  <button
                    className="bg-light-brown text-dark-red py-2 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold w-3/4"
                    onClick={() => (window.location.href = '/calendar')}
                  >
                    Calendar
                  </button>
                </div>
              </FourToOneGrid>
          </WidePageLayout>
        </>
    );
}

export default Home