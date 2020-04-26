import React from 'react';
import Page from '../../components/Page';
import Main from '../../components/Main';
import ListItem from '../../components/ListItem';

function Projects() {
  return <Page>
    <Main>
      <ListItem
        heading="Build-stats"
        shortDescription="Build stats for your builds"
        link="/projects/build-stats"
      />
    </Main>
  </Page>
}

export default Projects;
