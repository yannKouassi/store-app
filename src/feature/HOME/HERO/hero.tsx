"use client"

import styles from "./hero.module.css"
import Image from "next/image"
import {Images, BadgePercent, Star, Van, Utensils} from 'lucide-react'
import { useRouter } from "next/navigation";

interface Props {}

export default function Hero(props: Props) {

    const router = useRouter()

    const handleMouseEnter = () => {
        router.prefetch("/catalogue")
    }
    function handleNavigate() {
        router.push("/catalogue")
    }

    return (
        <div className={styles['hero']}>
            <div className={styles['hero-description']}>
                <h1 className={styles['hero-title']}>
                    Des saveurs <span className={styles['authentique']}>authentiques </span> livrées chez vous
                </h1>
                <p className={styles['hero-description-text']}>
                    Explorez notre catalogue de plats faits maison, cuisinés avec des produits frais. Commandez en quelques clics et régalez-vous.
                </p>


                <p className={styles['btn']}>
                    <button className={styles['btn-primary']} onClick={handleNavigate} onMouseEnter={handleMouseEnter}>
                        <Images size={18}/>
                        Voir le catalogue
                    </button >
                    <button className={styles['btn-secondary']} >
                        <BadgePercent size={18}/>Nos promotions
                    </button>
                </p>
                <div className={styles['hero-badge']}>
                    <p className={styles['hero-badge-text']}>
                        <Star size={15} className={styles['badge']} />
                        4.9/5
                    </p>
                    <p className={styles['hero-badge-text']}>
                        <Van size={15} className={styles['badge']} />
                        Livraison rapide
                    </p>
                    <p className={styles['hero-badge-text']}>
                        <Utensils size={15} className={styles['badge']} />
                        +120 plats
                    </p>

                </div>
                <div className={styles['hero-stats']}>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar">
                            <div className="w-12">
                                <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                        <div className="avatar">
                            <div className="w-12">
                                <img alt="Tailwind-CSS-Avatar-component" src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-primary text-neutral-content w-12">
                                <span>+3K</span>
                            </div>
                        </div>
                    </div>
                    <div className={'hero-stats-description'}>
                        <p className={styles['hero-stats-description-text1']}>
                            +3 500 clients satisfaits
                        </p>
                        <p className={styles['hero-stats-description-text2']}>
                            Rejoignez notre communauté
                        </p>

                    </div>
                </div>
            </div>
            <Image
                className={styles['hero-image']}
                src="/hero.jpg"
                alt="Profile"
                width={500}
                height={800}
                quality={100}  priority
            />
        </div>
    )
}
