function PastBills() {
  return (
    <>
      <div className="min-h-[90vh] mx-20 mt-48 flex flex-col gap-10 [&>*:last-child]:mb-40">
        <div className="w-ful text-center">
          <header className="w-ful text-center">
            <h1 className="text-red-50 my-8">Our Bills</h1>
          </header>
          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTkWNBZP_-2L7bRIl57PBJF0KnAXfkHVNkDcN6QrshUYrt1x05OX4tFeoT2NEVb6-cCSDMycmlkEHM4/pub?embedded=true"
              width="60%"
              height="900px"
              title="Past Bills"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PastBills