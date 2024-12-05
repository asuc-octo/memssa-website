import Banner from '../components/Navigation/Banner'

function Calendar() {
  return (
      <>
        <Banner title="Events"/>
        <div className="min-h-[90vh] mx-20 mt-20 flex flex-col gap-10 [&>*:last-child]:mb-40">
            <div className="w-full h-[80vh] flex justify-center mb-0 border-color border-8 bg-dark-red">
            <iframe src="https://calendar.google.com/calendar/embed?src=no61kqc9vsnm272lvg1rknl1uk%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="100%" height="100%" scrolling="no"></iframe>
            </div>
        </div>  
      </>
  );
}

export default Calendar