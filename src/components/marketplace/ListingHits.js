import React from 'react';
import classNames from 'classnames';
import { createClassNames, connectHits } from 'react-instantsearch-dom';

const cx = createClassNames('Hits');

const DefaultHitComponent = props => (
  <div
    style={{
      borderBottom: '1px solid #bbb',
      paddingBottom: '5px',
      marginBottom: '5px',
      wordBreak: 'break-all',
    }}
  >
    {JSON.stringify(props).slice(0, 100)}
    ...
  </div>
);

const DefaultHit = ({ hit, hitComponent: HitComponent = DefaultHitComponent }) => (
  <li className={classNames(cx('item'))} key={hit.objectID}>
    <HitComponent highlight hit={hit} />
  </li>
);

const ListingHits = ({
  defaultHit,
  hits = [],
  className = '',
  hitComponent: HitComponent = DefaultHitComponent,
}) => (
  <div className={classNames(cx(''), className)}>
    <ul className={cx('list')}>
      {defaultHit && (
        <DefaultHit hit={defaultHit} hitComponent={HitComponent} />
      )}
      {hits
        .filter(hit => !defaultHit || hit.objectID !== defaultHit.objectID)
        .map(hit => (
          <li className={cx('item')} key={hit.objectID}>
            <HitComponent hit={hit} />
          </li>
        )
      )}
    </ul>
  </div>
);

export default connectHits(ListingHits);
