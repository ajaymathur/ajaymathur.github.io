import Link from 'next/link'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <Link href="/" className={styles.name}>Ajay N Mathur</Link>
          <p className={styles.tagline}>Notes on software engineering, life and work</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
