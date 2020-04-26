import React from 'react';
import ListItem from '../../components/ListItem';
import Main from '../../components/Main';
import Page from '../../components/Page';

function Notes() {
	return <Page>
		<Main>
			<h2>Javascript</h2>
			<ListItem
				link='/notes/javascript/pipe-operator'
				heading="Pipe Operator"
				shortDescription="Details of pipe operator"
			/>
			<h2>TypeScript</h2>
			<ListItem
				link='/notes/typescript/decorators'
				heading="Decorators"
				shortDescription="About decorators"
			/>
			<h2>Unix</h2>
			<ListItem
				link='/notes/unix/sed'
				heading="sed ( Stream editor )"
				shortDescription="About sed"
			/>
		</Main>
	</Page>
}

export default Notes;
