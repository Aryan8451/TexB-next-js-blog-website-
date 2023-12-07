"use client";
import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import UserBar from "../userBar/UserBar";
import useSWR from "swr";
import { useSession } from "next-auth/react";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data1 = await res.json();

  if (!res.ok) {
    const error = new Error(data1.message);
    throw error;
  }
  return data1;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
const handleSubmit = async () => {
  await fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({ desc, postSlug }),
  });
  mutate()
};
const { data, mutate, isLoading } = useSWR(
  postSlug ? `http://localhost:3000/api/comments?postSlug=${postSlug}` : null,
  fetcher
);

  const [desc, setDesc] = useState("");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <UserBar item={item} />
                <h1>{item.desc}</h1>
            
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
