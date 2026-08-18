import Image from "next/image"
import styles from "./header.module.css"
import Link from "next/link";
import {House,Images}  from 'lucide-react'
interface Props {}

export default function Header(props: Props) {
    return(
      <header className={styles["header"] }>
          <div className={styles["header-container"]}>
              <div className={styles["header_left"]}>
                  <div >
                      <Image
                          src="/logo.png"
                          alt="Picture of the author"
                          width={55}
                          height={55}
                          quality={75}
                      />
                  </div>
                  <div>
                 <span className={styles["logo"]}>
                Dummy<span className={styles["logo-span"]}>Shop</span>
              </span>
                  </div>

              </div>
              <nav className={styles["nav"]}>
                  <Link href="/" className={styles["link"]}>
                      <House size={15}/>
                      Accueil
                  </Link>
                  <Link href="/catalogue" className={styles["link"]}>
                      <Images size={15} />
                      Catalogue
                  </Link>
              </nav>
          </div>

      </header>
    )
}

