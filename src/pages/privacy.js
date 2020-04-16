import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Button from '../components/Button';
import HeroImage from '../assets/images/MissionImage.png';

function PrivacyPage() {
  return (
    <Layout>
      <SEO title="Privacy Polivy" />
      <h2 className="text-3xl mt-12 lg:text-4xl font-headline uppercase font-dark font-bold mb-8 flex justify-center">
        Privacy Policy
      </h2>
      <div className="container mx-auto">
        <div className="mx-auto px-4 py-4 md:w-8/12 pb-24">
          <p className="mb-6">
            At #keepsmallstrong, accessible from keepsmallstrong.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by #keepsmallstrong and how we use it.
          </p>
          <p className="mb-6">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p className="mb-6">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in #keepsmallstrong. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
          
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            Consent
          </h3>

          <p className="mb-6">
            Information we collect
          </p>

          <p className="mb-6">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="mb-6">
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p className="mb-6">
            If we allow you to register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>

          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            How we use your information
          </h3>

          <p className="mb-6">
            We use the information we collect in various ways, including to:
            <ul>
              <li>- Provide, operate, and maintain our webste</li>
              <li>- Improve, personalize, and expand our webste</li>
              <li>- Understand and analyze how you use our webste</li>
              <li>- Develop new products, services, features, and functionality</li>
              <li>- Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
              <li>- Send you emails</li>
              <li>- Find and prevent fraud</li>
            </ul>
          </p>
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            Log Files
          </h3>
          <p className="mb-6">
            #keepsmallstrong follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator and the Privacy Policy Template.
          </p>
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            Cookies and Web Beacons
          </h3>
          <p className="mb-6">
            Like any other website, #keepsmallstrong uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
          <p className="mb-6">
            For more general information on cookies, please read "What Are Cookies".
          </p>
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            Advertising Partners Privacy Policies
          </h3>
          <p className="mb-6">
            You may consult this list to find the Privacy Policy for each of the advertising partners of #keepsmallstrong.
          </p>
          <p className="mb-6">
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on #keepsmallstrong, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          <p className="mb-6">
            Note that #keepsmallstrong has no access to or control over these cookies that are used by third-party advertisers.
          </p>
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
            Third Party Privacy Policies
          </h3>
          <p className="mb-6">
            #keepsmallstrong's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
          </p>
          <p className="mb-6">
You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
</p>
          <h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
CCPA Privacy Rights (Do Not Sell My Personal Information)
</h3>
          <p className="mb-6">
Under the CCPA, among other rights, California consumers have the right to:
<ul>
  <li>
Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
</li><li>
Request that a business delete any personal data about the consumer that a business has collected.
</li><li>
Request that a business that sells a consumer's personal data, not sell the consumer's personal data.
</li><li>
If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
</li>
</ul>
</p>
<h3 className="text-xl font-headline uppercase font-dark font-bold mb-8">
Children's Information
</h3>
<p className="mb-6">
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
#keepsmallstrong does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
</p>
          <Button className="mt-16 bg-dark" onClick={() => navigate('/apply')}><span className="text-xl">Let Us Help Your Small Business</span></Button>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPage;
