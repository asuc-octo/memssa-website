function StudentResources() {
    return (
        // header here
        // page div
        <>
          <div>
            <header>
                <h1>Student Resources</h1>
            </header>
            {/* split btwn top and bottom*/}
            <div id="resource-container">
                {/* split btwn graphics and funding*/}
                <div id="FundingR's" className="">
                    <div>
                        <p>External Harassment Form: <a href="https://uctitleix.i-sight.com/portal/Berkeley" style={{ textDecoration: 'underline' }}>https://uctitleix.i-sight.com/portal/Berkeley</a></p>
                        <p>Muslim Mental Health Initiative (MMHI): Book an appointment to speak with a Muslim mental health professional <a href="https://go.oncehub.com/calmmhi" style={{ textDecoration: 'underline' }}>here</a>.</p>
                        <p>Prayer Space List: <a href="https://berkeleymsa.org/spaces" style={{ textDecoration: 'underline' }}>https://berkeleymsa.org/spaces</a></p>
                    </div>
                </div>
            </div>
          </div>  
        </>
    );
}

export default StudentResources