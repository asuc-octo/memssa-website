//import React from 'react';
import { WidePageLayout } from '../../components/components/Layout/Page.layout';
import Banner from '../../components/Navigation/Banner';

// Replace these imports with actual image paths
import UnivCal from '../../assets/images/uc.jpg'; // Example path for images
import Msa from '../../assets/images/msa.jpg';
import Mmhi from '../../assets/images/mmhi.jpg';
import AACC from '../../assets/images/aacc_logo.png';

const StudentResources: () => JSX.Element = () => {
  return (
    <>
      <Banner title="Student Resources" />
      <WidePageLayout>
        <div className="space-y-8">
          
          <div className="space-y-16 px-64">
            {/* Protection against ICE */}
            <div className="flex flex-col md:flex-row items-center gap-12 bg-brown border border-brown rounded-lg text-center shadow-md p-8">
              <img
                src={AACC}
                alt="Arab American Civic Council Logo"
                className="w-36 h-36 md:w-44 md:h-44 rounded-lg shadow-md object-cover"
              />
              <p className="text-left text-black">
                Know Your Rights: <br />
                Protecting yourself from immigration officers{" "}
                <a
                  href="https://aaciviccouncil.org/kyr/?link_id=2&can_id=9fd5c1bba850a5b02df7c547f00fc4b4&source=email-california-we-have-new-arabic-kyr-tools-fight-ab-715-on-july-9-2&email_referrer=email_2804165&email_subject=california-we-have-new-arabic-kyr-tools-fight-ab-715-on-july-9"
                  style={{ textDecoration: "underline" }}
                >
                  here
                </a>.
              </p>
            </div>

            {/* External Harassment Form */}
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
