import styles from "./index.module.css";

const Cookies = () => {
  return (
    <div className={styles.page}>
      <div title={"Terms and Conditions"} className={styles.container}>
        <div className={styles.containerSection}>
          <h1>Cookies</h1>
          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>
        </div>
        <div className={styles.containerSection}>
          <h3>How We Use Cookies</h3>
          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>
        </div>
        <div className={styles.containerSection}>
          <h3>Disabling Cookies</h3>
          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>
          <ul>
            <li>Account related cookies</li>
          </ul>
          <p style={{ marginTop: "-8px" }}>
            If you create an account with us then we will use cookies for the
            management of the signup process and general administration. These
            cookies will usually be deleted when you log out however in some
            cases they may remain afterwards to remember your site preferences
            when logged out.
          </p>
          <ul>
            <li>Login related cookies</li>
          </ul>
          <p style={{ marginTop: "-8px" }}>
            We use cookies when you are logged in so that we can remember this
            fact. This prevents you from having to log in every single time you
            visit a new page. These cookies are typically removed or cleared
            when you log out to ensure that you can only access restricted
            features and areas when logged in.
          </p>
          <ul>
            <li>Forms related cookies</li>
          </ul>
          <p style={{ marginTop: "-8px" }}>
            When you submit data to through a form such as those found on
            contact pages or comment forms cookies may be set to remember your
            user details for future correspondence.
          </p>
        </div>
        <div className={styles.containerSection}>
          <h3>More Information</h3>
          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
