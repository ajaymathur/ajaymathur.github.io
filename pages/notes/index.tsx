import React from 'react';
import ListItem from '../../components/ListItem';
import Main from '../../components/Main';
import Page from '../../components/Page';

function Notes() {
	return <Page>
		<Main>
			<ListItem
				link='/notes/javascript'
				heading="Javascript"
				shortDescription="My Js Notes"
			/>
			<ListItem
				link='/notes/typescript'
				heading="TypeScript"
				shortDescription="My Ts Notes"
			/>
		</Main>
	</Page>
}

export default Notes;
