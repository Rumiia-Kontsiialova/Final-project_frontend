import { useId } from "react";
import styles from "./TextField.module.css"

const TextField = ({ label, register, name, rules, type = "text", placeholder, error }) => {
    const id = useId();

    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input {...register(name, rules)} type={type} id={id} placeholder={placeholder} className={styles.input} autoComplete="off" />
            {error && <p className={styles.error}>{error.message}</p>}
        </div>
    

    )
}

export default TextField