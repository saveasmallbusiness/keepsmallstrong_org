import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import theme from '../../tailwind.config';

const SocialIcons = () => {
  return (
    <div className="container hidden lg:flex md:justify-end w-1/6 items-center">
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
  );
};

export default SocialIcons;
