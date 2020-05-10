import React from 'react';
import forbesLogo from '../../assets/images/forbesLogo.png';
import vegnewsLogo from '../../assets/images/vegnewsLogo.png';

const ArticleQuotes = () => (
  <div className="container mx-auto py-6 md:py-20">
    <div className="block md:flex">
      <div align="center" className="md:w-1/3 px-4 py-8 md:py-0">
        <div style={{ maxWidth: 300, width: '100%' }}>
          “Here’s how to save small businesses and #keepsmallstrong”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={forbesLogo} height="100" width="100" alt="Forbes" />
        </div>
      </div>
      <div align="center" className="md:w-1/3 px-4 py-8 md:py-0">
        <div style={{ maxWidth: 300, width: '100%' }}>
          “Customers save Miami Vegan Bakery from shuttering with KeepSmallStrong.”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={forbesLogo} height="100" width="100" alt="Forbes" />
        </div>
      </div>
      <div align="center" className="md:w-1/3 px-4 py-8 md:py-0">
        <div style={{ maxWidth: 300, width: '100%' }}>
          “How you can support small business during covid-19”
        </div>
        <div className="pt-2 md:pt-8">
          <img src={vegnewsLogo} height="100" width="100" alt="VegNews" />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleQuotes;
