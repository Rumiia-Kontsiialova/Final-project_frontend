import LoginForm from "./LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loginUser } from "../../store/auth/authOperations";
import { selectAuthRequest} from "../../store/auth/authSelectors";  //, selectAuthenticated 
import styles from "./Login.module.css"
import img_background from "../../assets/png/img_background_login.png"

const Login = () => {
  const { error, loading } = useSelector(selectAuthRequest);
  // const isLoginSuccess = useSelector(selectAuthenticated);

  const dispatch = useDispatch();

  const onLogin = async (payload) => {
    dispatch(loginUser(payload));
  }

  // if(isLoginSuccess) return <Navigate to="/main" /> 

    return (
    <div className={styles.container}>

      <div className={styles.img}>
        <img src={img_background} alt="img_background_login" />
      </div>

      <div className={styles.right}>
        <LoginForm requestErrors={error} submitForm={onLogin}/>
        {loading && <p>Login request...</p>}
        {/* {error && <p style={{color: "red"}}>{error.message}</p>} */}
        
        <div className={styles.signupBox}>
          <p>Don't have an account? <Link to="/register" className={styles.signupLink}>Sign up</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login