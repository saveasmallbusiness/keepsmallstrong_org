import React from 'react';
import Footer from './Footer';
import Header from './Header';

import '@zendeskgarden/react-dropdowns/dist/styles.css';
import '@zendeskgarden/react-forms/dist/styles.css';

require('typeface-raleway')
require('typeface-khula')

const Layout = ({ children }) => {
  return (
    <div className="font-body bg-light" id="top">
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
