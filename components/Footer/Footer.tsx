import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <h2 id="footer-connect" className={styles.heading}>Connect</h2>
        <nav aria-labelledby="footer-connect">
          <ul className={styles.links}>
            <li>
              <Link href="/support">Apps</Link>
            </li>
            <li>
              <a href="https://github.com/ajaymathur" target="_blank" rel="noopener noreferrer">
                GitHub<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ajay-narain-mathur-2245b553/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
