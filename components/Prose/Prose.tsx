import styles from './Prose.module.scss'

export default function Prose({ children }: { children: React.ReactNode }) {
  return <div className={styles.prose}>{children}</div>
}
