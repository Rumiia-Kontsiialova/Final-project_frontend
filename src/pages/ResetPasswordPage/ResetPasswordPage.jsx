import ResetPasswordForm from "../../modules/ResetPasswordForm/ResetPasswordForm";
import { Link } from "react-router-dom";

const ResetPasswordPage = () => {
    return (
    <>
        <h1>ResetPasswordPage</h1>
        <div>
          <h3>Trouble login in?</h3>
          <p>Enter your email, phone, or username and we'll<br />
          send you a link to get back into your account.</p>
          <ResetPasswordForm />
        </div>
        <div>
          <p>OR</p>
          <Link to="/signup">Create new account</Link>
          <Link to="/login">Back to login</Link>
        </div>
        
    </>
  )

}

export default ResetPasswordPage