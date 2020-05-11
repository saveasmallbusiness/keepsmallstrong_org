/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import Sticky from 'react-stickynode';

import Footer from './Footer';
import Header from './Header';

import '@zendeskgarden/react-dropdowns/dist/styles.css';
import '@zendeskgarden/react-forms/dist/styles.css';
import PreFooter from '../sections/PreFooter';

require('typeface-raleway');
require('typeface-khula');

const Layout = ({ children }) => {
  // const [isSticky, setIsSticky] = useState(false);

  // const handleStateChange = ({ status }) => {
  //   setIsSticky(status > 0);
  // };

  return (
    <div className="font-body bg-light" id="top">
      {/* <Sticky enabled top={0} onStateChange={handleStateChange} activeClass="is-sticky"> */}
      <Header />
      {/* </Sticky> */}
      <main className="text-gray-900 pt-24">{children}</main>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Layout;
