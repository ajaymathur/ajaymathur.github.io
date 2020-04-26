import React, { Fragment } from 'react';
import Meta from '../Meta';
import Nav from '../Nav';
import './styles.scss';

function Page({ children }) {
  return <Fragment>
    <Meta />
    <Nav />
    <div id="page">{children}</div>
  </Fragment>
}

export default Page;
