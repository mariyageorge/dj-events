import Link from "next/link";
import styles from "./Header.module.scss";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div>
      <header className={styles.header}>
        <h2>DJ Events</h2>
        {router.pathname != "/" && <Link href="/">Home Page</Link>}
      </header>
    </div>
  );
};

export default Header;
