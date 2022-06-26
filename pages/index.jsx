import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

import { Header } from '../components/Header.jsx';



function App() {

  return (
    <div className={styles.App}>
      <main>
        <section>
          <h1>Faça sua escolha:</h1>
          <div>

            <Link href="/redpill">

              <div className={styles.chooseButton}>
                <img src="https://raw.githubusercontent.com/duhshi/audios-anniversary/main/redpillpxl.png" alt="redpill" />
                <p>red pill</p>
              </div>
            </Link>
            <Link href="/jujuba">

              <div className={styles.chooseButton}>
                <img src="https://raw.githubusercontent.com/duhshi/audios-anniversary/main/bluepillpxl.png" alt="bluepill" />
                <p>jujuba</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

// const listaDeMusicas = ['https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3', 'https://samplelib.com/lib/preview/mp3/sample-15s.mp3']



{/* <div className={styles.container}>

<header>
  <div>
    <div className={styles.player}>
      <button>
        <Image width={90} height={90} src="/bluepill.png" alt="play" />
      </button>
      <p>nome da música</p>
    </div>
  </div>
</header>
<section>
  <h1>Faça sua escolha</h1>
</section>
<section>
  <a href="/redpill">
    <div>
      <img src="bluepill" alt="" />
      <p>{red}</p>
    </div>
  </a>
  <a href="/bluepill">
    <div>
      <img src="/redpill.png" alt="" />
      <p>blue</p>
    </div>
  </a>

</section>
<Image width={112} height={112} src="/bluepill.png" alt="bluepill" />

</div> */}



export default App
