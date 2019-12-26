import React from 'react';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Meta from '../../components/Meta';
import './styles.scss';

const Notes = () => <div>
	<Nav />
	<Meta />
	<div id="links">
		<div>
			<Link href="/notes/javascript">
				<a><h3>JavaScript</h3></a>
			</Link>
			<Link href="/notes/typescript">
				<a><h3>TypeScript</h3></a>
			</Link>
		</div>
	</div>
</div>

export default Notes;
