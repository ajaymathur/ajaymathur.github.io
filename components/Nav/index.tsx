import React, { useState } from 'react';
import Link from 'next/link';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './styles.scss';

function DesktopNav() {
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

function MobileNav() {
	const [isMenuOpen, toggleMenuState] = useState(false);
	return <div className="mobile-nav">
		<div className="hamburger-icon" onClick={() => toggleMenuState(!isMenuOpen)}>🍔</div>
		<nav className={`${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
			<Link href="/">
				<a>🏡 Home</a>
			</Link>
			<Link href="/notes">
				<a>📝 Notes</a>
			</Link>
			<Link href="/blogs">
				<a>🔈 Blogs</a>
			</Link>
			<Link href="/projects">
				<a>📈 Projects</a>
			</Link>
			<Link href="/connect">
				<a>👥 Connect</a>
			</Link>
		</nav>
	</div>

}

function Nav() {
	const isMobile = useMediaQuery(
		'only screen and (max-device-width: 480px)'
	)
	return isMobile ? <MobileNav /> : <DesktopNav />
}

export default Nav;

