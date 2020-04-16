import React from 'react';
import Search from '../components/sections/Search';
import Marketplace from '../pages/marketplace';

const ListingDetailPage = ({
  pageContext,
}) => (<Marketplace deeplinkedListing={pageContext} />);

export default ListingDetailPage;
