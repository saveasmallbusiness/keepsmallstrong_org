import React, { useState } from 'react';
import { Link } from 'gatsby';

import hashtag from '../../assets/images/keep-small-strong-hashtag.png';

const Header = ({ isSticky }) => {
  const [expanded, setExpanded] = useState(false);

  const navClass = `flex items-center justify-between flex-wrap py-6 px-4 sm:px-6 w-full fixed z-50 top-0 bg-light ${expanded && 'bg-secondary'} ${(isSticky && !expanded) && 'bg-opacity-90'}`;
  const menuClass = `w-full flex-grow lg:flex lg:items-center lg:w-auto ${!expanded && 'hidden'} lg:block pt-6 lg:pt-0`;
  const navItemClass = `py-2 lg:inline lg:px-4 uppercase ${expanded && 'text-white'}`

  return (
    <nav className={navClass}>
      <div
        style={{ height: 31 }}
        className="flex items-center flex-shrink-0 mr-6"
      >
        {(isSticky || expanded) && (
          <Link to="/">
            <img
              src={hashtag}
              alt="#KeepSmallStrong"
              style={{
                height: 25,
                width: 'auto',
                margin: '0px auto',
                ...expanded && {
                  filter: 'brightness(0) invert(1)'
                }
              }}
            />
          </Link>
        )}
      </div>

      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border-2 border-rounded text-primary border-primary"
          onClick={() => setExpanded(!expanded)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      <div className={menuClass}>
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          <li className={navItemClass}>
            <Link to="/apply">Submit a Business</Link>
          </li>
          <li className={navItemClass}>
            <Link to="/help">Join the Movement</Link>
          </li>
          <li className={navItemClass}>
            <Link to="/marketplace">Shop the Marketplace</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
