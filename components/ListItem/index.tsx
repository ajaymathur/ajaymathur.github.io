import React, { Fragment } from 'react';
import Link from 'next/link';

import './styles.scss';

function ListItem({ heading, shortDescription, link }) {
  return <Fragment>
    <Link href={link}>
      <a>
        <div className="list-item">
          <h3>{heading}</h3>
          <p>{shortDescription}</p>
        </div>
      </a>
    </Link>
  </Fragment>
}

export default ListItem;
