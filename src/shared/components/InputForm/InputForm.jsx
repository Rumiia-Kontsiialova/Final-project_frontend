import styles from "./InputForm.module.css"

const InputForm = ({children}) => {
    return <input type="text" placeholder={children} className={styles.input} />
}

export default InputForm