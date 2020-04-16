import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';
import Lockup from '../assets/images/keep-small-strong-lockup.png';

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div class="flex justify-center text-center" style={{ flexDirection: 'column', verticalAlign: 'middle' , minHeight: '60vh' }}>
        <h2 className="text-2xl font-bold inline-block my-8 p-3">
          Looks like this page could not be found, don’t let that happen to your favorite local business...
        </h2>
        <div class="flex justify-center">
          <img class="w-3/6" src={Lockup} alt="Keep Small Strong" />
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
