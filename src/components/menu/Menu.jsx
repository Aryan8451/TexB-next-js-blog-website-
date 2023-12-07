import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
      
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.style}`}
        >
         
          style
        </Link>
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.fashion}`}
        >
         
          fashion
        </Link>
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.style}`}
        >
         
          style
        </Link>
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.food}`}
        >
         
          food
        </Link>
        <Link
          href={`/blog?cat=style`}
          className={`${styles.category} ${styles.food}`}
        >
          food
        </Link>
      </div>
      
      <h1 className={styles.title}>Our recommendation</h1>
      <MenuPosts withImage={true} />
    </div>
  )
}

export default Menu