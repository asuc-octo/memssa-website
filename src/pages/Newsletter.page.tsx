import Banner from '../components/Navigation/Banner'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import newsletter1 from '../assets/images/newsletter/1.png';
import newsletter2 from '../assets/images/newsletter/2.png';
import newsletter3 from '../assets/images/newsletter/3.png';
import newsletter4 from '../assets/images/newsletter/4.png';
import newsletter5 from '../assets/images/newsletter/7.png';
import newsletter6 from '../assets/images/newsletter/8.png';
import newsletter7 from '../assets/images/newsletter/9.png';
import newsletter8 from '../assets/images/newsletter/10.png';  
import newsletter9 from '../assets/images/newsletter/11.png';

function Newsletter() {
    return (<>
        <Banner title="Newsletter"/>
        <div className="bg-[#f8f1e7] mx-0 px-0 py-5 font-serif text-[#4d3c36]">
            <div className="relative mx-auto w-[90%] h-auto mb-7 border-color border-8 rounded-tl-large-custom rounded-br-large-custom bg-dark-red">
                {/* Carousel */}
                <Carousel showThumbs={false} autoPlay={false} infiniteLoop={true}>
                    
                    {[newsletter1, newsletter2, newsletter3, newsletter4, newsletter5, newsletter6, newsletter7, newsletter8, newsletter9].map((image, index) => (
                        <div key={index} className="flex justify-center items-start overflow-y-auto">
                            <img src={image} alt={`Page ${index + 1}`} className="w-full max-h-[95vh] p-5 object-contain object-center rounded-large-custom" />
                        </div>
                    ))}
                </Carousel>
            </div>
            </div>
            </>)

}
export default Newsletter;