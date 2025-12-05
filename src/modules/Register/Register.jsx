import RegisterForm from "./RegisterForm/RegisterForm";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../store/auth/authOperations";
import { Navigate } from "react-router-dom";
import { selectAuthRequest } from "../../store/auth/authSelectors";

const Register = () => {

    const { error, loading, isRegisterSuccess } = useSelector(selectAuthRequest);

    const dispatch = useDispatch();

    const noRegister = async(payload) => {
        dispatch(registerUser(payload));
    }

    if(isRegisterSuccess) return <Navigate to="/login" /> 

    return (
    <div>
        <h1>Sign Up</h1>
        <div>
            <RegisterForm requestErrors={error} isSubmitSuccess={isRegisterSuccess} submitForm={noRegister} />
            {loading && <p>Register request...</p>}
            {error && <p style={{color: "red"}}>{error.message}</p>}
            <p>
                By signing up, you agree to our{' '}
                <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer">Terms</a>
                ,{' '}
                <a href="https://about.instagram.com/data-policy?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                , and{' '}
                <a href="https://privacycenter.instagram.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Cookies Policy</a>.
            </p>
        </div>
        <div>
            <p>Have an account? <Link to="/login">Log in</Link></p>
        </div>
    </div>
  )

}

export default Register