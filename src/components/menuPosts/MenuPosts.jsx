import React from 'react'
import styles from "./menuPosts.module.css"
import Link from 'next/link'
import Image from 'next/image'
const MenuPosts = ({withImage}) => {

  return (
    <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle} >Hyperloop Technology: Redefining Eco-Friendly Travel. Union Minister   </h3>
            <div className={styles.details}>
            <span className={styles.username}>Aryan</span>
            <span className={styles.date}>  - 10.03.2023</span>  
            </div>
            
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
         {withImage && ( <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Vaishnav approved an Rs 8.34 crore Hyperloop Technology initiative with </h3>
            <div className={styles.details}>
            <span className={styles.username}>Aryan</span>
            <span className={styles.date}>  - 10.03.2023</span>  
            </div>
            
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage && (<div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>food</span>
            <h3 className={styles.postTitle}> The Ministry of Railways greenlit the project, which includes a Centre of </h3>
            <div className={styles.details}>
            <span className={styles.username}>Aryan</span>
            <span className={styles.date}>  - 10.03.2023</span>  
            </div>
            
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
         {withImage &&( <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} alt='' fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
            <h3 className={styles.postTitle}>Hyperloop Technology: Redefining Eco-Friendly Travel. Union Minister Ashwini ,</h3>
            <div className={styles.details}>
            <span className={styles.username}>Aryan</span>
            <span className={styles.date}>  - 10.03.2023</span>  
            </div>
            
          </div>
        </Link>
      </div>
  )
}

export default MenuPosts