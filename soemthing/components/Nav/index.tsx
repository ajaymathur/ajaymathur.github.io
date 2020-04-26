import React from 'react';
import Link from 'next/link';
import './styles.scss';

function Nav() {
	return <nav>
		<Link href="/">
			<a>🏡 Home</a>
		</Link>
		<span className="seperator">|</span>
		<Link href="/notes">
			<a>📝 Notes</a>
		</Link>
		<span className="seperator">|</span>
		<Link href="/blogs">
			<a>🔈 Blogs</a>
		</Link>
		<span className="seperator">|</span>
		<Link href="/projects">
			<a>📈 Projects</a>
		</Link>
		<span className="seperator">|</span>
		<Link href="/connect">
			<a>👥 Connect</a>
		</Link>
	</nav>
}

export default Nav;

