import styles from "./Header.module.scss";
import { AudioPlayer } from "./AudioPlayer.jsx"


export function Header() {
  return (
    <header className={styles.container}>
      <AudioPlayer />
    </header>
  )
}