import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/redpill.module.scss'

export default function Redpill() {
  return (
    <div className={styles.App}>
      <main>
        <section>
          <h1>Faça sua escolha:</h1>
          <div>

            <Link href="/redpill">

              <div className={styles.wrong}>
                <img src="https://raw.githubusercontent.com/duhshi/audios-anniversary/main/morpheus.jpg" alt="morpheus" />
                <p>história errada</p>
              </div>
            </Link>
            <Link href="/jujuba">

              <div className={styles.chooseButton}>
                <img src="https://raw.githubusercontent.com/duhshi/audios-anniversary/main/bluepillpxl.png" alt="jujuba" />
                <p>jujuba azul</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}