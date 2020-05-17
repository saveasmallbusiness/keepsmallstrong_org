import React from 'react';

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
import UPS from '../../assets/sponsors/UPS.png';

const Sponsors = () => (
  <div className="container md:mx-auto lg:flex lg:justify-center py-8 sm:pt-24 md:pb-12">
    <div className="lg:w-1/3 text-left mx-6 sm:mx-12 sm:mb-12">
      <h3 className="font-heading font-bold text-2xl sm:text-4xl uppercase text-secondary leading-tight pb-4 md:pb-8">An Inspired Collective</h3>
      <p>
        Like any great endeavor, this too starts small. Brought to you by incredible humans, who work for some amazing companies, lending their individual time to help save thousands of small businesses from closing their doors.
      </p>
    </div>
    <div className="lg:w-2/3 mx-6 sm:mx-12 lg:mx-0">
      <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center mx-auto pt-12 sm:pt-6">
        <div className="px-6 pb-12">
          <a href="https://agnostack.com" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 25 }} src={AgnoStack} alt="agnoStack" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://astoundcommerce.com/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={Astound} alt="Astound Commerce" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://www.capgemini.com/us-en/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={Cap} alt="CapGemini" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://goenvoy.co/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={Envoy} alt="Envoy" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="http://goood.us/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={GOOOD} alt="GOOOD" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://www.liveareacx.com/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={LiveArea} alt="LiveArea" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://www.pfscommerce.com/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={PFSW} alt="PFS" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://www.pixelmedia.com/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={PixelMEDIA} alt="PixelMEDIA" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://taos.digital/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={TAOS} alt="TAOS" />
          </a>
        </div>
      </div>
      <p className="text-l mt-8 md:mt-0 mb-8 md:mb-4 mx-6 text-center">
        Enabled through support from some wonderful partners.
      </p>
      <div className="sm:flex sm:flex-wrap sm:items-center sm:justify-center mx-auto">
        <div className="px-6 pb-12">
          <a href="https://ups.com" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 70 }} src={UPS} alt="UPS" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://algolia.com" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={Algolia} alt="Algolia" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://shopify.com/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 35 }} src={Shopify} alt="Shopifu" />
          </a>
        </div>
        <div className="px-6 pb-12">
          <a href="https://www.zendesk.com/us-en/" target="_blank" rel="noopener noreferrer">
            <img className="mx-auto" style={{ maxHeight: 70 }} src={Zendesk} alt="Zendesk" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Sponsors;
