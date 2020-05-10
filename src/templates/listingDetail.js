import React from 'react';
import Marketplace from '../pages/marketplace';

const ListingDetailPage = ({
  pageContext,
}) => (<Marketplace deeplinkedListing={pageContext} />);

export default ListingDetailPage;
