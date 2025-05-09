import { FourToOneGrid } from '../components/components/Layout/Columns.layout';
import { WidePageLayout } from '../components/components/Layout/Page.layout'
import AboutUsImage from '../assets/images/AboutUsImage.jpg'
import HomeButtonBackgroundImage from '../assets/images/homeButtonBackground.jpg'
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
                    <div className="w-1/2 px-8 flex flex-col items-center bg-brown border border-brown rounded-lg text-center shadow-md p-8 mx-10">
                <h3>About Us</h3>
                <p className="text-lg mb-4">
                  MEMSSA advocates for academic and administrative representation by operating on grassroots levels. We aim to mobilize organizations that serve or represent the Middle Eastern, Muslim, Sikh, and South Asian identities. We strive to create a safe space for students to express their concerns and ideas, and to foster a sense of community among students of these identities. We are committed to promoting diversity and inclusion on campus and in the community.
                </p>
                <button
                  className="bg-dark-red text-light-brown py-2 px-8 rounded-xl hover:bg-light-purple"
                  onClick={() => window.location.href = '/office/constitution'}
                >
                  Our Constitution
                </button>
                </div>
              </section>
              <FourToOneGrid>
                {[
                {title: "Join Our Office (Closed)", link: ""}, 
                {title: "Join Our Mailing List", link: 'https://forms.gle/8NjJkvUQoWyf5ztm7'}, 
                {title: "Anonymous Suggestions", link: 'https://forms.gle/e8RXbUoWaJbo4DXA7'}, 
                {title: "Calendar", link: '/calendar'}
                ].map((info, index) => (
                  <div key={index} className="relative w-full h-64"
                  onClick={() => (window.location.href = info.link)}>
                    <img
                      src={HomeButtonBackgroundImage}
                      alt="Background"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
                    />
                    
                    <button className="bg-light-brown text-dark-red py-2 px-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold w-3/4"
                    >
                      {info.title}
                    </button>
                  </div>
                ))}
              </FourToOneGrid>
          </WidePageLayout>
        </>
    );
}

export default Home