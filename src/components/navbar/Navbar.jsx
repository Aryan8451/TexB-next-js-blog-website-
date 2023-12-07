import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.social}>
       
         <Image src="/instagram.png" alt='instagram' width={24} height={24}/>
        <Image src="/facebook.png" alt='facebook' width={24} height={24}/>
        </div>
        <div className={styles.logo}>
            TexB
        </div>
        <div className={styles.links}>
            <ThemeToggle/>
            <Link className={styles.link}href={"/"}>
            Home
            </Link>
            <Link className={styles.link} href={"/contact"}>
            contact
            </Link>
            <Link className={styles.link}href={"/about"}>
            about
            </Link>
            <AuthLinks/>
        </div>
     
    </div>
  )
}

export default Navbar