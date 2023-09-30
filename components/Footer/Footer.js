import Link from "next/link";
import styles from "./Footer.module.scss";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div>
      <footer className={styles.footer}>
        {router.pathname != "/about" ? (
          <>
            <p>To know more about this website, visit the </p>
            <Link className={styles.link} href="/about">
              About page
            </Link>
          </>
        ) : 
        <>
        <p>This app was developed by MGK</p>
        </>} 
      </footer>
    </div>
  );
};

export default Footer;
