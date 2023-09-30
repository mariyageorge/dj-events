import Layout from "../components/Layout/Layout";
import styles from "../styles/about.module.scss";

const AboutPage = () => {
  return (
    <Layout title="About Page">
      <div className={styles.about}>
        <div className={styles.header}>DJ Events</div>
        <div className={styles.body}>
          <h3 className={styles.subHeader}>About Us</h3>
          <p className={styles.content}>
            Welcome to DJ Events Hub – your ultimate destination for an
            electrifying music experience! At DJ Events Hub, we believe in the
            power of music to create unforgettable moments and bring people
            together. We're passionate about curating exceptional DJ events that
            resonate with music enthusiasts, partygoers, and dance aficionados.
            Our mission is to craft remarkable events that leave you craving for
            more beats and rhythms.
          </p>
          <h3 className={styles.subHeader}>Our Vision</h3>
          <p className={styles.content}>
            We envision a world where music transcends boundaries and connects
            souls. Our goal is to be at the forefront of this musical journey,
            offering you events that epitomize creativity, diversity, and pure
            euphoria.
          </p>
          <h3 className={styles.subHeader}>What We Offer</h3>
          <p className={styles.content}>
            Diverse Lineup: We showcase a diverse range of DJs from various
            genres, ensuring there's something for everyone, whether you're into
            techno, EDM, house, hip-hop, or trance.
          </p>
          <p className={styles.content}>
            Spectacular Venues: Our events are hosted at some of the most iconic
            and vibrant venues, providing the perfect backdrop for an immersive
            musical experience.
          </p>
          <p className={styles.content}>
            Unforgettable Atmosphere: We go the extra mile to create an
            electrifying atmosphere, with cutting-edge lighting,
            state-of-the-art sound systems, and visually stunning setups that
            elevate the energy and excitement.
          </p>
          <p className={styles.content}>
            Passionate DJs: Our DJs are more than just performers; they're
            artists who pour their heart and soul into every set, delivering
            performances that leave the crowd in awe.
          </p>
          <h3 className={styles.subHeader}>Join the Musical Journey</h3>
          <p className={styles.content}>
            Whether you're a seasoned raver or a first-timer, DJ Events Hub
            invites you to join our musical journey. Stay tuned for our upcoming
            events, immerse yourself in the rhythm, and dance the night away in
            the company of fellow music lovers. Let the beats unite us and the
            music move us. See you on the dance floor!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
