import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import UserBar from "@/components/userBar/UserBar";
import Comments from "@/components/comments/Comments";
const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};
const SinglePage = async ({ params }) => {
  const { slug } = params;
  const {post:data} = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>

          <UserBar data={data}/>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt=""
              fill
              className={styles.image}
            ></Image>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html:data?.desc}}/>
          
        
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
