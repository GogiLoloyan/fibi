import styles from "./index.module.css";

interface Logo {
  name: string;
  imgUrl: string;
}

const logos: Logo[] = [
  { name: "Apple TV", imgUrl: "/images/partners/appletv.png" },
  { name: "Roku", imgUrl: "/images/partners/roku.png" },
  { name: "Tizen", imgUrl: "/images/partners/tizen.png" },
  { name: "webos", imgUrl: "/images/partners/web-os.png" },
  { name: "Android TV", imgUrl: "/images/partners/androidtv.png" },
  { name: "Fire TV", imgUrl: "/images/partners/firetv.png" },
];

const tripleLogos = [...logos, ...logos, ...logos];

const Partners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftEffect} />
      <div className={styles.innerContainer}>
        <div className={styles.scrollContainer}>
          <div className={styles.logoTrack}>
            {tripleLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className={styles.logoWrapper}>
                <img
                  src={logo.imgUrl}
                  alt={logo.name}
                  className={styles.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightEffect} />
    </div>
  );
};

export default Partners;
