'use client'

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage blocked (private mode, cookies off): the theme still applies for this page view.
    }
  }

  if (!theme) return null

  const next = theme === 'light' ? 'Dark' : 'Light'

  return (
    <button type="button" className={styles.toggle} onClick={toggle}>
      <span className="visually-hidden">Switch to </span>
      {next}
      <span className="visually-hidden"> theme</span>
    </button>
  )
}
