import React from 'react';
import Head from 'next/head';
import Main from '../../components/Main';
import Page from '../../components/Page';

function Connect() {
  return <Page>
    <Main>
      <Head>
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
      </Head>
      <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="light" data-vanity="ajay-narain-mathur-2245b553">
        <a className="LI-simple-link" href='https://au.linkedin.com/in/ajay-narain-mathur-2245b553?trk=profile-badge'>Ajay Narain Mathur</a>
      </div>
    </Main>
  </Page>
}

export default Connect;
