import React from 'react';

import inspiredCollectiveImage from '../../assets/images/inspired-collective.png'
import Algolia from '../../assets/sponsors/Algolia.png';
import AgnoStack from '../../assets/sponsors/AgnoStack.png';
import Astound from '../../assets/sponsors/Astound.png';
import Cap from '../../assets/sponsors/Capgemini.png';
import Envoy from '../../assets/sponsors/Envoy.png';
import GOOOD from '../../assets/sponsors/GOOOD.png';
import LiveArea from '../../assets/sponsors/LiveArea.png';
import PFSW from '../../assets/sponsors/PFSW.png';
import PixelMEDIA from '../../assets/sponsors/PixelMEDIA.png';
import Shopify from '../../assets/sponsors/Shopify.png';
import TAOS from '../../assets/sponsors/TAOSDigital.png';
import Zendesk from '../../assets/sponsors/Zendesk.png';

const Sponsors = () => (
  <div className="container px-8 sm:px-16 mx-auto rounded-lg text-center flex flex-col lg:flex-row">
   

    <div class="flex-1 content-center my-auto">
      <h2 className="text-red-600 text-3xl lg:text-4xl font-headline uppercase font-dark font-bold mb-8 justify-center">
      THE PEOPLE ON BOARD      
      </h2>
    <p className="text-l mb-12 md:text-xl mx-auto md:mb-16 text-white">
      Like any great endeavor, this too starts small. Brought to you by incredible humans, 
      who work for some amazing companies, lending their time to help save thousands of small
      businesses from closing their doors.
    </p>
    </div>
    <div class="flex flex-col flex-1 content-center lg:ml-16">            
      <div className="flex flex-wrap">
        <div class="flex flex-wrap  lg:flex-row content-center  items-center justify-center">
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://agnostack.com" target="_blank">
              <img style={{ maxHeight: 30 }} src={AgnoStack} alt="agnoStack" />
            </a>
          </div>
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://astoundcommerce.com/" target="_blank">
              <img style={{ maxHeight: 50 }} src={Astound} alt="Astound Commerce" />
            </a>
          </div>
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://www.capgemini.com/us-en/" target="_blank">
              <img style={{ maxHeight: 50 }} src={Cap} alt="CapGemini" />
            </a>
          </div>
        </div>
      <div class="flex flex-wrap lg:flex-row  flex-1 content-center  items-center justify-center">
        <div className="px-4 py-8 lg:flex-1">
          <a href="https://goenvoy.co/" target="_blank">
            <img style={{ maxHeight: 50 }} src={Envoy} alt="Envoy" />
          </a>
        </div>
        <div className="px-4 py-8 lg:flex-1">
          <a href="http://goood.us/" target="_blank">
            <img style={{ maxHeight: 40 }} src={GOOOD} alt="GOOOD" />
          </a>
        </div>
        <div className="px-4 py-8 lg:flex-1">
          <a href="https://www.liveareacx.com/" target="_blank">
            <img style={{ maxHeight: 50 }} src={LiveArea} alt="LiveArea" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap lg:flex-row  flex-1 content-center  items-center justify-center">  
      <div className="px-4 py-8 lg:flex-1">
        <a href="https://www.pfscommerce.com/" target="_blank">
          <img style={{ maxHeight: 50 }} src={PFSW} alt="PFS" />
        </a>
      </div>
      <div className="px-4 py-8 lg:flex-1">
        <a href="https://www.pixelmedia.com/" target="_blank">
          <img style={{ maxHeight: 50 }} src={PixelMEDIA} alt="PixelMEDIA" />
        </a>
      </div>
      <div className="px-4 py-8 lg:flex-1">
        <a href="https://taos.digital/" target="_blank">
          <img style={{ maxHeight: 50 }} src={TAOS} alt="TAOS" />
        </a>
      </div>
    </div>
    

      <p className="text-l mt-12 md:text-xl md:w-8/12 mx-auto md:my-16">
        Enabled through support from some wonderful partners.
      </p>
      <div className="container">
        <div className="flex flex-wrap lg:flex-row  flex-1 content-center  items-center justify-center mx-auto">
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://agnostack.com" target="_blank">
              <img style={{ maxHeight: 40 }} src={Algolia} alt="Algolia" />
            </a>
          </div>
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://shopify.com/" target="_blank">
              <img style={{ maxHeight: 50 }} src={Shopify} alt="Shopifu" />
            </a>
          </div>
          <div className="px-4 py-8 lg:flex-1">
            <a href="https://www.zendesk.com/us-en/" target="_blank">
              <img style={{ maxHeight: 80 }} src={Zendesk} alt="Zendesk" />
            </a>
          </div>
        </div>
      </div>
    </div>  
  </div>
);

export default Sponsors;
