'use client'

import { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const attr = document.documentElement.getAttribute('data-theme')
    setTheme((stored || attr || 'light') as 'light' | 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }

  if (!theme) return null

  return (
    <button className={styles.toggle} onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
