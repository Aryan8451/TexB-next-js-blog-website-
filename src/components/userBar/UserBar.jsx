import React from "react";
import styles from "./userBar.module.css"
import Image from "next/image";
const UserBar = ({data,item}) => {
 
  return (
    <div className={styles.user}>
      <div className={styles.userImageContainer}>
        <Image src={data?.user.image ||item.user.image} alt="" fill className={styles.avtar} />
      </div>
      <div className={styles.userTextContainer}>
        <span className={styles.username}>{data?.user.name || item.user.name}</span>
        <span className={styles.date}>{item?.user.createdAt}</span>
      </div>
    </div>
  );
};

export default UserBar;
