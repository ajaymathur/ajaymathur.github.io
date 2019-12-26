import React from 'react';
import ListItem from '../../components/ListItem';

import Page from '../../components/Page';
import Main from '../../components/Main';

function Blogs() {
	return <Page>
		<Main>
			<ListItem
				link='/blogs/creating_repl'
				heading="Creating a REPL"
				shortDescription="how to create a repl"
			/>
		</Main>
	</Page>
}

export default Blogs;
