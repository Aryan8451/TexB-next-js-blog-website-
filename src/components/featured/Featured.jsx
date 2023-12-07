import React from "react";
import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>
          <h1 className={styles.titleText}> get the latest news from blogs</h1>
        </span>
      </div>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="" fill></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            repellat excepturi
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sapiente asperiores deserunt perferendis esse! Nostrum non quod
            nesciunt ab voluptates quis eius et. Commodi nam ducimus
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
