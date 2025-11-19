import Banner from '../components/Navigation/Banner'

function Calendar() {
  return (
      <>
        <Banner title="Events"/>
        <div className="min-h-[90vh] mx-20 mt-20 flex flex-col gap-10 [&>*:last-child]:mb-40">
            <div className="w-full h-[80vh] flex flex-col justify-center mb-0 border-color border-8 bg-dark-red">
            <h2 className="text-3xl text-bgdefault"> MEMSSA Calendar</h2>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&src=Y180MWMwN2RlOGM0NTI0YzY4NjdmYzlkZThhNzE4NzAxZjczYWZiOTU1ZjZlMjA4MWUwODUyYzU4ZTE2MTg3YjBjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238e24aa" width="100%" height="100%" scrolling="no"></iframe>
            </div>
            <div className="w-full h-[80vh] flex flex-col justify-center mb-0 border-color border-8 bg-dark-red">
              <h2 className="text-3xl text-bgdefault">Coalition Calendar</h2>
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnBgOmOzkAqqtRzsGO-k2Vw3tNr5KRD3bj8ixvO2vBCq93-uXDSQMzOX304abSiKB3LdnNBFFqyLP8/pubhtml?widget=true&amp;headers=false" width="100%" height="100%" scrolling="yes"></iframe>
            </div>
        </div>  
      </>
  );
}

export default Calendar