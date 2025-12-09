import styles from "./NotFoundPage .module.css";
import img_background from "../../assets/png/img_background_login.png"

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.container}>
              <div className={styles.img}>
                <img src={img_background} alt="img_background_login" />
              </div>
              <div className={styles.right}>
                <h1>Oops! Page Not Found (404 Error)</h1>
                <p>We're sorry, but the page you're looking for doesn't seem to exist. <br />
                   If you typed the URL manually, please double-check the spelling. <br />
                   If you clicked on a link, it may be outdated or broken.
                </p>
              </div>
      </div>
        
    </>
  )

}

export default NotFoundPage