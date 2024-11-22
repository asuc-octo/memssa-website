function PastBills() {
  return (
      <>
        <div className="min-h-[90vh] mx-20 mt-48 flex flex-col gap-10 [&>*:last-child]:mb-40">
          <div className="w-1/2 flex flex-center">
            <div>
                <h2>Bills we are working on</h2>
                <div>carousel</div>
                <div>links</div>
            </div>
            <div>
                <h2>Bills we've passed</h2>
                <div>carousel</div>
                <div>links</div>
            </div>
          </div>
        </div>  
      </>
  );
}

export default PastBills