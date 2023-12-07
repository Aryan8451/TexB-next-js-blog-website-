"use client";
import React, { useEffect, useState } from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList =  () => {
  const [catData, setCatData] = useState([]);

  const get_allCategories = async () => {
    
    try {
      const response = await fetch("/api/categories", { cache: "no-store" });
      const data = await response.json()
      setCatData(data)
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_allCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>
      {catData?.map((item) => (
  <Link
    key={item.id} 
    href={`/blog?cat=${item.slug}`}
    className={`${styles.category} ${styles[item.slug]}`}
  >
    {item.img && (
      <Image
        src={item.img}
        alt=""
        width={32}
        height={32}
        className={styles.image}
      />
    )}
    {item.title}
  </Link>
))}

       
      </div>
    </div>
  );
};

export default CategoryList;
