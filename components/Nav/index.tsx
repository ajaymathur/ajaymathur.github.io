import React from 'react';
import Link from 'next/link';
import './styles.scss';

export default () => <nav>
		<Link href="/notes">
			<a>Notes</a>
		</Link>
		<Link href="/blogs">
			<a>Blogs</a>
		</Link>
    <a>Connect</a>
	</nav>
