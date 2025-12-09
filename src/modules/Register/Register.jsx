import RegisterForm from "./RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/authOperations";
import { Navigate } from "react-router-dom";
import { selectAuthRequest } from "../../store/auth/authSelectors";
import styles from "./Register.module.css";

const Register = () => {

    const { error, loading, isRegisterSuccess } = useSelector(selectAuthRequest);

    const dispatch = useDispatch();

    const onRegister = async(payload) => {
        dispatch(registerUser(payload));
    }

    if(isRegisterSuccess) return <Navigate to="/login" /> 

    return (
    <div className={styles.container}>
        <div>
            <RegisterForm requestErrors={error} isSubmitSuccess={isRegisterSuccess} submitForm={onRegister} />
            {loading && <p>Register request...</p>}
            {error && <p style={{color: "red"}}>{error.message}</p>} 
        </div>

        <div className={styles.loginBox}>
            <p>Have an account? <Link to="/login" className={styles.loginLink}>Log in</Link></p>
        </div>
    </div>
  )

}

export default Register