import Banner from '../../components/Navigation/Banner'

function Bills() {
  return (
    <>
      <Banner title="Our Bills"/>
      <div className="min-h-[90vh] mx-20 mt-20 flex flex-col gap-10 [&>*:last-child]:mb-40">
          <div className="w-full flex justify-center">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vTkWNBZP_-2L7bRIl57PBJF0KnAXfkHVNkDcN6QrshUYrt1x05OX4tFeoT2NEVb6-cCSDMycmlkEHM4/pub?embedded=true"
              width="60%"
              height="900px"
              title="Past Bills"
              className="border-color border-8 bg-brown"
            />
          </div>
      </div>
    </>
  );
}

export default Bills