"use client"
import React, { useEffect, useState } from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../Card/Card'

const CardList =  ({page,cat}) => {
  const [cardData, setCardData] = useState([]);
  const [county,setCounty] =useState()

  const get_allPosts = async (page) => {
    
    try {
      const response = await fetch(`/api/posts?page=${page}&cat=${cat || ""}`, { cache: "no-store" });
      const {posts,count} = await response.json()
      
      setCardData(posts)
      setCounty(count)
    
      
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_allPosts(page,cat);
  }, [page]);
  const POST_PER_PAGE = 4
  const hasPrev = POST_PER_PAGE*(page-1)>0
  const hasNext = POST_PER_PAGE*(page-1)+POST_PER_PAGE < county
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New Posts</h1>
      <div className={styles.posts}>
        {cardData?.map(
          (item)=>(
            <div key={item.id} >
      <Card  key1={item.id} item={item}/>        
            </div>

          )
        )}
       
   
      </div>
    <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList