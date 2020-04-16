import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../tailwind.config';
import logo from '../../assets/images/logo.png';
import SocialIcons from '../SocialIcons';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
    <header className="relative top-0 bg-light">
      <div className="relative container py-4 flex justify-center md:center md:content-center h-auto md:h-20 mx-auto">
        {/* <button
        onClick={() => setNavOpen(!navOpen)}
          className="outline-none flex left-0 top-1/2 transform-neg-50 md:transform-none md:w-1/6 md:top-auto md:translate-0 mx-4 absolute md:relative">
          <FontAwesomeIcon
            color={theme.theme.extend.colors.dark.default}
            icon={faBars}
            size="2x"
          />
        </button> */}
        {/* <div className={`${navOpen ? 'max-h-500' : 'max-h-0'} pr-16 bg-light top-20 absolute left-0 overflow-hidden absolute z-50 transition-all duration-500 ease-in-out`}>
          <ul className="px-4">
            <li className="text-3xl mb-3">
              <Link to="/mission">Our Mission</Link>
            </li>
            <li className="text-3xl mb-3">
              <Link to="/apply">Apply</Link>
            </li>
            <li className="text-3xl mb-3">
              <Link to="/mission">Save Your Local</Link>
            </li>
            <li className="text-3xl mb-3">
              <Link to="/mission">Shop Local</Link>
            </li>
            <li className="text-3xl mb-3">
              <Link to="/mission">Donate</Link>
            </li>
          </ul>
        </div> */}
        <div className="flex w-full px-8 md:px-2 py-2 md:py-0 font-headline font-semibold text-2xl text-secondary items-center text-center uppercase flex justify-center">
          <Link to="/">
            <img src={logo} alt="Keep Small Strong" />
          </Link>
        </div>
      </div>
    </header>
    <div className="absolute top-0 right-0 mt-6">
      <SocialIcons />
    </div>
    </>
  );
};

export default Header;
