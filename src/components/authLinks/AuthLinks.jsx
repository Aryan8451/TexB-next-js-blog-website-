"use client"
import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
const AuthLinks = () => {
  const[open,setOpen] =useState(false)
  const {status} = useSession()
  return (
    <>
     {
      status=== "unauthenticated"?(
        <Link href={"/login"} className = {styles.Link}>Login</Link>
      ):(
        <>
        
        <Link href={"/write"} className = {styles.Link}>Write</Link>
        <span className = {styles.Link} onClick={signOut}> Logout</span>
        </>

      )
     }
     <div className={styles.burger} onClick={()=>setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
     </div>
     {
      open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}> homepage</Link>
          <Link href={"/"}> contact</Link>
          <Link href={"/"}> about</Link>
          {
      status=== "notAuthenticated"?(
        <Link href={"/login"}>Login</Link>
      ):(
        <>
        
        <Link href={"/write"}>Write</Link>
        <span classname = {styles.Link} > Logout</span>
        </>

      )
     }
        </div>
      )
     }
    </>
   
  )
}

export default AuthLinks;