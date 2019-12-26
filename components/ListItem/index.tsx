import React, { Fragment } from 'react';
import Link from 'next/link';

import './styles.scss';

function ListItem({ heading, shortDescription, link }) {
  return <Fragment>
    <Link href={link}>
      <a>
        <div className="list-item">
          <h2>{heading}</h2>
          <p>{shortDescription}</p>
        </div>
      </a>
    </Link>
  </Fragment>
}

export default ListItem;
