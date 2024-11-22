function RSOResources() {
    return (
        // header here
        // page div
        <>
          <div>
            <header>
                <h1>RSO Leader Resources</h1>
            </header>
            {/* split btwn top and bottom*/}
            <div id="resource-container">
                {/* split btwn graphics and funding*/}
                <div id="FundingR's" className="">
                    <div>
                        {/* graphics here (may need to add extra div for display pos) */}
                    </div>
                    <div>
                        {/* Funding here (may need to add extra div for display pos) */}
                    </div>
                </div>
                {/* split btwn booking and graphics*/}
                <div id="BookingR's" className="">
                    <div>
                        {/* Booking here (may need to add extra div for display pos) */}
                    </div>
                    <div>
                        {/* graphics here (may need to add extra div for display pos) */}
                    </div>
                </div>
            </div>
          </div>  
        </>
    );
}

export default RSOResources