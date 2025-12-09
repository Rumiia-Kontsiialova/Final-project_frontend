import ResetPasswordForm from "../ResetPassword/ResetPasswordForm/ResetPasswordForm"
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { loginUser } from "../../store/auth/authOperations";
// import { selectAuthRequest} from "../../store/auth/authSelectors";  //, selectAuthenticated 
import styles from "./ResetPassword.module.css"
import imgTroubleLogin from "../../assets/svg/imgTroubleLogin.svg";

const ResetPassword = () => {
//   const { error, loading } = useSelector(selectAuthRequest);
//   const isResetPasswordSuccess = useSelector(selectAuthenticated);

//   const dispatch = useDispatch();

//   const onResetPassword = async (payload) => {
//     dispatch(ResetPasswordUser(payload));
//   }

  // if(isResetPasswordSuccess) return <Navigate to="/" /> 

    return (
    <div className={styles.container}>
        {/* <div> */}
          <img src={imgTroubleLogin} alt="ImgTroubleLogin" className={styles.imgTroubleLogin}/>
          <h3>Trouble logging in?</h3>
          <p>Enter your email, phone, or username and we'll<br />
          send you a link to get back into your account.</p>
        {/* </div> */}

        <ResetPasswordForm />
        
       <div className={styles.orBlock}>
          <div className={styles.line}></div>
            <span>OR</span>
          <div className={styles.line}></div>
        </div>

          <Link to="/register" className={styles.createNewAcc}>Create new account</Link>
          <div className={styles.wrapperBackLogin} >
            <Link to="/login" className={styles.backLogin} >Back to login</Link>
          </div>
          
       
      </div>
  )
}

export default ResetPassword