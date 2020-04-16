import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';

import Button from '../Button';
import { slugify } from '../../utils';
import theme from '../../../tailwind.config';

const getSocialIcon = (social_type, social_url) => {
  if (!social_url) {
    return null
  }

  let social_icon;
  switch (social_type) {
    case 'facebook':
      social_icon = (
        <FontAwesomeIcon
          color={theme.theme.extend.colors.dark.default}
          icon={faFacebook}
          size="2x"
        />
      );
      break;
    case 'twitter':
      social_icon = (
        <FontAwesomeIcon
          color={theme.theme.extend.colors.dark.default}
          icon={faTwitter}
          size="2x"
        />
      );
      break;
    case 'instagram':
      social_icon = (
        <FontAwesomeIcon
          color={theme.theme.extend.colors.dark.default}
          icon={faInstagram}
          size="2x"
        />
      );
      break;
    case 'yelp':
      social_icon = (
        <FontAwesomeIcon
          color={theme.theme.extend.colors.dark.default}
          icon={faYelp}
          size="2x"
        />
      );
      break;
    default:
      break;
  }

  if (!social_icon) {
    return null;
  }

  return (
    <a
      className="ml-2"
      href={social_url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {social_icon}
    </a>
  );
};

const MarketplaceCard = ({
  hit: {
    objectID,
    name,
    description,
    email,
    phone,
    address,
    address: {
      line1,
      line2,
      city,
      state: _state,
      zip
    } = {},
    industry,
    commerce_promotion,
    commerce_url,
    donation_url,
    website_url,
    image_url,
    social = [],
  },
  highlight,
}) => {
  const state = !_state ? _state : `${_state}`.toUpperCase();
  const listing_phone = ((number) => {
    const phone_parts = number && number.match(/^(1\s?)?((?:\(|-)?[0-9]{3}(?:\)|-)?|[0-9]{3})[\s\-]?([\0-9]{3})[\s\-]?([0-9]{4})$/);
    return !number ? number : `+1 (${phone_parts[2].replace(/\D/g,'')}) ${phone_parts[3].replace(/\D/g,'')}-${phone_parts[4].replace(/\D/g,'')}`
  })(phone);
  const listing_url = website_url || commerce_url || donation_url;
  const map_url = (({
    line1, line2, city, state, zip
  }) => {
    const path = [`${line1}${line2 && `+${line2}`}`, city, state, zip].join(',+');
    return (zip || (city && state)) ? encodeURI(`https://www.google.com/maps/place/${path}`) : null;
  })({ ...address, state });
  const share_url = `https://keepsmallstrong.org/marketplace/${slugify(name)}`;

  return (
    <div
      id={`listing-${objectID}`}
      key={`listing-${objectID}`}
      className={classNames(
        'flex',
        'flex-col',
        'text-dark',
        'pt-8',
        'rounded-md',
        'border',
        'border-solid',
        'justify-between',
        'h-full',
        'group',
        highlight ? 'border-gray-400' : 'border-transparent',
        highlight && 'bg-gray-200',
        highlight && 'shadow-2xl',
        highlight && 'px-10',
        highlight && '-mx-10',
        highlight && (commerce_url || donation_url) ? 'pb-24' : 'pb-10',
        highlight && (commerce_url || donation_url) && '-mb-10'
      )}
    >
      <div className="relative">
        <div className="absolute right-0 top-0 m-2 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          {/* TODO: fix so it works w/ algolia paging/re-enable */}
          {/* <div className="fb-share-button" 
            data-layout="button"
            data-size="large"
            data-href={share_url}>
          </div> */}
        </div>

        <h3 className="text-3xl leading-none font-headline font-bold mb-3 uppercase cursor-pointer" onClick={() => listing_url && window.open(listing_url)}>
          {name}
        </h3>
        <h4 className="uppercase font-bold h-8">{industry}</h4>
        <p className="text-l mb-3">{description}</p>
      </div>

      <div>
        <div className="md:flex md:flex-row md:justify-between md:items-end mt-4 mb-2">
          <div className="block md:flex md:flex-col">
            {(zip || (city && state)) && (
              <address className="cursor-pointer"
                onClick={() => map_url && window.open(map_url)}
              >
                {line1 && (
                  <p className="text-md">
                    {line1}
                  </p>
                )}
                {line2 && (
                  <p className="text-md">
                    {line2}
                  </p>
                )}
                <p className="text-md mb-1">
                  {city && (<span>{city}, </span>)}
                  <span className="uppercase">{state} </span>
                  <span>{zip}</span>
                </p>
              </address>
            )}
            {email && (
              <a href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md mb-1"
              >
                {email}
              </a>
            )}
            {listing_phone && (
              <p className="text-md mb-1">
                <a href={`tel: ${listing_phone}`} alt={`Tel: ${listing_phone}`}>
                  {listing_phone}
                </a>
              </p>
            )}
            {listing_url && (
              <p className="text-md mb-1">
                <a className="underline" href={listing_url} alt={`URL: ${listing_url}`} target="_blank">{listing_url}</a>
              </p>
            )}
          </div>

          {social && social.length && (
            <div className="my-4 md:my-0">
              {social.map((socialEntries) => Object.entries(socialEntries).map(([social_type, social_url]) => getSocialIcon(social_type, social_url)))}
            </div>
          )}
        </div>

        <div className={classNames(
          'md:flex',
          (commerce_url || donation_url) && '-mb-12',
          (commerce_url && donation_url) ? 'md:justify-between' : (commerce_url || donation_url) && 'md:justify-end',
        )}>
          {donation_url && (
            <Button className="bg-dark w-5/12" onClick={() => window.open(donation_url)}>
              Donate
            </Button>
          )}
          {commerce_url && (
            <Button className="bg-dark w-5/12" onClick={() => window.open(commerce_url)}>
              Shop
            </Button>
          )}
        </div>
      </div>
    </div>
  )
};

export default MarketplaceCard;
