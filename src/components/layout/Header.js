import React from 'react';
import { Link } from 'gatsby';

import hashtag from '../../assets/images/keep-small-strong-hashtag.png';

const Header = ({ isSticky }) => (
  // <div className="bg-light bg-opacity-50">
  <div className="container hidden md:block mx-auto">
    {/* <div className="w-1/3">
      {isSticky && (
        <div className="py-8">
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
      )}
    </div> */}
    {/* <div className="w-2/3"> */}
    <div className="relative py-10 px-4 lg:flex lg:justify-end h-auto">
      <ul className="text-center lg:text-right">
        <li className="inline px-4">
          <Link to="/apply">Submit a Business</Link>
        </li>
        <li className="inline px-4">
          <Link to="/help">Join our Team</Link>
        </li>
        <li className="inline px-4">
          <Link to="/marketplace">Shop the Marketplace</Link>
        </li>
      </ul>
    </div>
    {/* </div> */}
  </div>
  // </div>
);

export default Header;
