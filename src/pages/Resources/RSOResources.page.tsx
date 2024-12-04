import fullGroup from '../../assets/images/1A4A3358.jpg';
import halfGroup from '../../assets/images/1A4A3559.jpg';
import Banner from '../../components/Navigation/Banner'
            
function RSOResources() {
    return (
        <>  
            <Banner title="RSO Leader Resources"/>
            <div className="bg-[#E6D7C3] text-[#5D2D29] min-h-screen">
                <div id="resource-container" className="w-full flex flex-col items-center px-5 py-8 space-y-8 text-center">
                    {/* Funding Resources Section */}
                    <div
                        id="FundingR"
                        className="flex flex-col md:flex-row items-center justify-evenly w-full px-5 py-8 space-y-5 md:space-y-0 md:space-x-8"
                    >
                        <div className="flex-1 md:flex-[0.5] flex justify-center">
                            <img
                                src={fullGroup}
                                alt="Funding Resources Graphic"
                                className="w-full md:w-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="bg-[#C4A381] flex-[0.5] md:flex-[0.25] p-6 rounded-lg shadow-md">
                            <h3 className="font-bold mb-3">Funding Resources</h3>
                            <p className="mb-3">
                                ASUC provides funding opportunities for student programs and events. Learn how to apply
                                and get support for your initiatives below.
                            </p>
                            <br />
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://callink.berkeley.edu/organization/asucsenateonly/"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        ASUC Senate
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://asuc.org/student-orgs/"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        ASUC Funding Page
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://asuc.org/public-notice/"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        Sign Up for ASUC Meetings
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:senate@asuc.org"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        ASUC Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Booking Resources Section */}
                    <div
                        id="BookingR"
                        className="flex flex-col-reverse md:flex-row items-center justify-evenly w-full px-5 py-8 space-y-5 md:space-y-0 md:space-x-8"
                    >
                        <div className="bg-[#C4A381] flex-[0.5] md:flex-[0.25] p-6 rounded-lg shadow-md">
                            <h3 className="font-bold mb-3">Booking Resources</h3>
                            <br />
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2uuFG3En3ObBPHnw_LENfm84iv16edU_6PhsJkCdIAx8SSf3vDVIzGYzTieUOyYKqYDUzM8Z7Q"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        Book a Meeting With Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://25live.collegenet.com/pro/berkeley#!/home/dash"
                                        className="text-[#5D2D29] hover:underline"
                                    >
                                        Book a Classroom
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 md:flex-[0.5] flex justify-center">
                            <img
                                src={halfGroup}
                                alt="Booking Resources Graphic"
                                className="w-full md:w-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RSOResources;
