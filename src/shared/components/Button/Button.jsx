import styles from "./Button.module.css"

const Button = ({children, type}) => {
    return <button type={type} className={styles.btn}>{children}</button>
}

export default Button