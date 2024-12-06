import React from 'react';
import { WidePageLayout } from '../../components/components/Layout/Page.layout';
import Banner from '../../components/Navigation/Banner';

// Replace these imports with actual image paths
import UnivCal from '../../assets/images/uc.jpg'; // Example path for images
import Msa from '../../assets/images/msa.jpg';
import Mmhi from '../../assets/images/mmhi.jpg';

const StudentResources: React.FC = () => {
  return (
    <>
      <Banner title="Community Resources" />
      <WidePageLayout>
        <div className="space-y-8">
          {/* External Harassment Form */}
          <div className="space-y-16 px-64">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-brown border border-brown rounded-lg text-center shadow-md p-8">
              <img
                src={UnivCal}
                alt="UC Logo"
                className="w-36 h-36 md:w-44 md:h-44 rounded-lg shadow-md object-cover"
              />
              <p className="text-left text-black">
                External Harassment Form:{" "}
                <br />
                <a
                  href="https://uctitleix.i-sight.com/portal/Berkeley"
                  style={{ textDecoration: "underline" }}
                >
                  https://uctitleix.i-sight.com/portal/Berkeley
                </a>
              </p>
            </div>
            {/* Muslim Mental Health Initiative */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-brown border border-brown rounded-lg text-center shadow-md p-8">
              <img
                src={Mmhi}
                alt="Muslim Mental Health Initiative Logo"
                className="w-36 h-36 md:w-44 md:h-44 rounded-lg shadow-md object-cover"
              />
              <p className="text-left text-black">
                Muslim Mental Health Initiative (MMHI): <br />
                Book an appointment to speak with a Muslim mental health professional{" "}
                <a
                  href="https://go.oncehub.com/calmmhi"
                  style={{ textDecoration: "underline" }}
                >
                  here
                </a>.
              </p>
            </div>
            {/* Prayer Space List */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-brown border border-brown rounded-lg text-center shadow-md p-8">
              <img
                src={Msa}
                alt="MSA Logo"
                className="w-36 h-36 md:w-44 md:h-44 rounded-lg shadow-md object-cover"
              />
              <p className="text-left text-black">
                Prayer Space List:{" "}
                <a
                  href="https://berkeleymsa.org/spaces"
                  style={{ textDecoration: "underline" }}
                >
                  https://berkeleymsa.org/spaces
                </a>
              </p>
            </div>
          </div>
        </div>
      </WidePageLayout>
    </>
  );
};

export default StudentResources;
