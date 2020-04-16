import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import theme from '../../../tailwind.config';

const Footer = () => (
  <footer className="bg-dark pt-10 pb-20">
    <div className="container mx-auto text-gray-800 text-center">
      <div className="py-2">
        <h2 className="text-4xl font-bold font-headline text-accent">
          <i style={{ paddingRight: '3px' }}>#</i>
          KEEPSMALLSTRONG
        </h2>
      </div>
      <div className="py-2 text-light flex flex-col md:flex-row justify-center">
        <a href="/mission">Our Mission</a>
      </div>
      <div className="container mt-4 md:flex md:justify-center items-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/keepsmallstrong"
          className="inline px-2"
        >
          <FontAwesomeIcon
            color={theme.theme.extend.colors.primary.default}
            icon={faFacebook}
            size="2x"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/keepsmallstrong"
          className="inline px-2"
        >
          <FontAwesomeIcon
            color={theme.theme.extend.colors.primary.default}
            icon={faTwitter}
            size="2x"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/keepsmallstrong"
          className="inline px-2"
        >
          <FontAwesomeIcon
            color={theme.theme.extend.colors.primary.default}
            icon={faInstagram}
            size="2x"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/keep-small-strong"
          className="inline px-2"
        >
          <FontAwesomeIcon
            color={theme.theme.extend.colors.primary.default}
            icon={faLinkedin}
            size="2x"
          />
        </a>
      </div>
      <div className="py-2 mt-4 text-light flex flex-col md:flex-row justify-center">
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
