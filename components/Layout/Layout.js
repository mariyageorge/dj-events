import Head from "next/head";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} keywords={keywords} />
      </Head>

      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
    title: 'DJ Events',
    description: 'Find the coolest dj events',
    keywords: 'music, dj'
}

export default Layout;
