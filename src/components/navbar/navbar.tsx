import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/example">Example</Link>
        </li>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/example/nested-page">NestedPage</Link>
        </li>
      </ul>
    </nav>
  )
}