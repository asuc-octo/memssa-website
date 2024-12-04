import MemssaLogo from '../../assets/images/MemssaLogo.svg'
import OCFLogo from '../../assets/images/OCFLogo.svg'
// import { PFooterCategory, PFooterItem, footer_categories } from '../../data/footer'

function Footer() {
    return (
        <footer className="bg-[#a56456] text-[#f5f5f5] p-6 font-serif flex justify-between">
            {/* Logo */}
            <div className="flex flex-col">
                <div className='mt-14 pl-2 flex flex-row'>
                    <img src={MemssaLogo} className='h-12 w-12 pointer-events-none' />
                    <h4 className="m-2 pl-3 text-center font-bold">MEMSSA</h4>
                </div>
                <img src={OCFLogo} className='h-48 w-48 pointer-events-none' />
            </div>
            {/* Links */}
            <div className="font-[Noto_Sans] flex flex-wrap flex-row flex-[0.5] justify-around items-start">
                {/* General Section */}
                <div className="flex-10 m-4 min-w-[80px]">
                    <h4 className="mb-2 font-bold">General</h4>
                    <ul className="text-xl list-none p-0">
                        <li className="mb-2"><a href="#about" className="hover:text-[#f8d6ba] transition-colors">About</a></li>
                        <li className="mb-2"><a href="#office" className="hover:text-[#f8d6ba] transition-colors">Our Office</a></li>
                        <li className="mb-2"><a href="#resources" className="hover:text-[#f8d6ba] transition-colors">Resources</a></li>
                        <li className="mb-2"><a href="#calendar" className="hover:text-[#f8d6ba] transition-colors">Calendar</a></li>
                        <li className="mb-2"><a href="#community" className="hover:text-[#f8d6ba] transition-colors">Community</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex-10 m-4 min-w-[80px]">
                    <h4 className="mb-2 font-bold">Social Media</h4>
                    <ul className="text-xl list-none p-0">
                        <li className="mb-2"><a href="https://www.instagram.com/memssasenator/" className="hover:text-[#f8d6ba] transition-colors">Instagram</a></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div className="flex-10 m-4 min-w-[80px]">
                    <h4 className="mb-2 font-bold">Contact Us</h4>
                    <ul className="text-xl list-none p-0">
                        <li className="mb-2"><a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uuFG3En3ObBPHnw_LENfm84iv16edU_6PhsJkCdIAx8SSf3vDVIzGYzTieUOyYKqYDUzM8Z7Q" className="hover:text-[#f8d6ba] transition-colors">Schedule a Meeting</a></li>
                        <li className="mb-2"><a href="mailto:contact@mdanish@asuc.org" className="hover:text-[#f8d6ba] transition-colors">Email Us</a></li>
                    </ul>
                </div>
                
            </div>
        </footer>
    );
}

export default Footer;
