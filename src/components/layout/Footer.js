import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import hashtag from '../../assets/images/keep-small-strong-hashtag.png';
import theme from '../../../tailwind.config';

const Footer = () => (
  <footer className="py-12 md:py-24">
    <div className="md:container mx-6 md:mx-auto text-center">
      <div className="py-2">
        <img
          src={hashtag}
          alt="#KeepSmallStrong"
          className="hidden md:block"
          style={{
            height: 40,
            width: 'auto',
            margin: '0px auto',
          }}
        />
        <img
          src={hashtag}
          alt="#KeepSmallStrong"
          className="block md:hidden"
          style={{
            height: 20,
            width: 'auto',
            margin: '0px auto',
          }}
        />
      </div>
      <div className="py-4">
        <div className="inline mx-4">
          <a href="/mission">Our Mission</a>
        </div>
        <div className="inline mx-4">
          <a href="/help">Join our Team</a>
        </div>
      </div>
      <div className="mt-2 md:flex md:justify-center md:items-center">
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
      <div className="py-2 mt-12 text-sm flex flex-col md:flex-row justify-center">
        <a href="/privacy">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
